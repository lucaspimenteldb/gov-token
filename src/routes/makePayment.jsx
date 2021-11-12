import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import LogoSymbolBlue from '../assets/logo-symbol-blue.svg';
import TransactionsItems from '../components/transactions/transactions';
import Charge from '../assets/charge-icon.svg';
import Pay from '../assets/pay-icon.svg';
import Header from '../components/header/header';
import '../sass/makepayment.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MakePayment() {
  const transactions = [
    {
      date: "14 out, 2021",
      transactions: [
        {
          transactionType: "pay",
          toOrFrom: "Colaborador",
          amount: "800",
          icon: Pay,
          id: 3,
        },
        {
          transactionType: "charge",
          toOrFrom: "Governo",
          amount: "400",
          icon: Charge,
          id: 2,
        }
      ]
    },
    {
      date: "12 out, 2021",
      transactions: [
        {
          transactionType:"charge",
          toOrFrom:"Governo",
          amount:"1200",
          icon: Charge,
          id: 1,
        }
      ]
    },
  ]

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showError, setShowError] = useState(false);
  const handleCloseError = () => setShowError(false);
  const handleShowError = () => setShowError(true);

  const [showConfirmation, setshowConfirmation] = useState(false);
  const handleCloseConfirmation = () => setshowConfirmation(false);
  const handleShowConfirmation = () => (setShow(false), setshowConfirmation(true));

  const [step, setStep] = useState(1);
  const [invoiceCode, setInvoiceCode] = useState('');
  const [inputError, setInputError] = useState(false);

  function pasteInvoice() {
    const invoiceInput = document.getElementById('invoice-input');
    navigator.clipboard.readText().then(invoice => {
      if (invoice && invoiceInput) {
        setInvoiceCode(invoice);
        invoiceInput.value = invoice;
      }
    })
  }

  function nextStep() {
    const invoiceInput = document.getElementById('invoice-input');
    return invoiceInput.checkValidity() ? (setStep(2), setInputError(true)) : setInputError(false);
  }
  function cancelTransfer() {
    return (setStep(1), setInputError(false));
  }
  
  function stepOne() {
    if (step === 1) {
      return (
        <Row>
          <Col xs="12" md={{span: 6, offset: 3}}>
            <h5>Realizar transferência</h5>
            <p>Insira o código recebido</p>

            <Form>
              <Form.Group>
                <Form.Control 
                  id="invoice-input"
                  placeholder="Código do invoice" 
                  className="invoice-input"
                  required
                />
                {inputError && <Form.Text id="error-message" className="error">Insira um código válido</Form.Text>}
              </Form.Group>
            </Form>

            <Button variant="light" className="paste-invoice" onClick={() => pasteInvoice()}>
              Colar código
            </Button>
          </Col>
        </Row>
      )
    }
  }
  function stepTwo() {
    if (step === 2) {
      return (
        <Row>
          <Col xs="12" md={{span: 6, offset: 3}}>
            <p>Você está transferindo</p>

            <p className="invoice-titles">GOV Tokens</p>
            <h1>12.000,00</h1>

            <p className="invoice-titles">Para</p>
            <h4>Lucas Pimentel</h4>

            <p className="invoice-titles">CPF</p>
            <h4>702.120.484-23</h4>

            <p className="invoice-titles">Código</p>
            <p>{invoiceCode}</p>

          </Col>
        </Row>
      )
    }
  }
  function renderTransactions () {
    if (step === 1) {
      return (
        <div className="px-0">
          <Col xs="12" md={{span: 6, offset: 3}} className="mt-4">
            <h6 className="last-transactions">Últimas transações</h6>
          </Col>

          <Col xs="12" md={{span: 6, offset: 3}} className="mb-4 px-0">
            <TransactionsItems transactions={transactions}/>
          </Col>
        </div>
      )
    }
  }

  return (
    <Row className="mx-0">
      <Header noBalance/>

      <Col xs="12" className="payment-form">
        {/* render steps accordingly to the step we are in */}
        {stepOne()}
        {stepTwo()}
      </Col>

      {/* show arrow to next step in step 1 */}
      { 
        step === 1 && <Col xs="12">
          <Button 
            className="next-step" 
            onClick={() => nextStep()}
          >
            TRANSFERIR
          </Button>
        </Col>
      }

      {/* show confirm and cancel button in step 2 */}
      { 
        step === 2 && 
        <Col xs="12" md={{span: 6, offset: 3}} className="mt-4 d-flex flex-column">
          <Button className="confirm-transfer" size="lg" onClick={handleShow}>
            CONFIRMAR TRANSFERÊNCIA
          </Button>
          <Button 
            variant="outline-danger" 
            className="mt-4 cancel-transfer"
            onClick={() => cancelTransfer()}
          >
            CANCELAR
          </Button>
        </Col>
      }

      {/* show last transactions */}
      {renderTransactions()}
      
      {/* confirm payment modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={LogoSymbolBlue} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="modal-info">
            <p className="info-title">Desejar confirmar o pagamento?</p>

            {/* amount transfered */}
            <article>
              <p className="info-label">GOV Tokens</p>
              <p className="info-text amount">-8000</p>
            </article>
            {/* transfer date */}
            <article>
              <p className="info-label">Data da operação</p>
              <p className="info-text">04/10/2021</p>
            </article>
            {/* amount transfered */}
            <article>
              <p className="info-label">Para</p>
              <p className="info-text">Lucas Pimentel</p>
            </article>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>CANCELAR</Button>
          <Button onClick={handleShowConfirmation}>REALIZAR TRANSFERÊNCIA</Button>
        </Modal.Footer>
      </Modal>

      {/* confirmed payment*/}
      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={LogoSymbolBlue} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="modal-info">
            <p className="info-title">Pagamento efetuado!</p>

            {/* amount transfered */}
            <article>
              <p className="info-label">GOV Tokens</p>
              <p className="info-text amount">-8000</p>
            </article>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button>OK</Button>
        </Modal.Footer>
      </Modal>

      {/* error modal */}
      <Modal show={showError} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={LogoSymbolBlue} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="modal-info">
            <p className="info-title error">Erro ao realizar a transferência</p>
            <p>Deseja tentar novamente?</p>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/home">
            <Button variant="outline-danger">CANCELAR</Button>
          </Link>
          <Button onClick={handleCloseError}>TENTAR NOVAMENTE</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}