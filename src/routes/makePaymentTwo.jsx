import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import LogoSymbolBlue from '../assets/logo-symbol-blue.svg';
import TransactionsItems from '../components/transactions/transactions';
import Charge from '../assets/charge-icon.svg';
import Pay from '../assets/pay-icon.svg';
import Header from '../components/header/header';
import '../sass/makepayment.scss'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeaderTwo from "../components/header/headerTwo";

export default function MakePaymentTwo() {
  useEffect(() => {
    const axios = require('axios');
    const getTransactions = async () => {
      try {
        const response = await axios.get('http://govtoken.com.br:44888/v1/transactions/2');
        setApiTransactions([{date: '15 jan, 2022', transactions: response.data}]);
        console.log(response.data)
      } 
      catch (er) {
        console.log(er.message);
      }
    }

    getTransactions();
  }, [])

  const [apiTransaction, setApiTransactions] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const axios = require('axios');
    const date = new Date();
    const time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(time, invoiceValue)
    axios.post(`http://govtoken.com.br:44888/v1/send/1/2/${invoiceValue}`,{
      sender: '2',
      receiver: '1',
      date: time,
      amount: invoiceValue
    }).then((res) => {
      console.log(res)
      setShow(true);
    }).catch((er) => console.log(er.request))
  };

  const [showError, setShowError] = useState(false);
  const handleCloseError = () => setShowError(false);
  const handleShowError = () => setShowError(true);

  const [showConfirmation, setshowConfirmation] = useState(false);
  const handleCloseConfirmation = () => setshowConfirmation(false);
  const handleShowConfirmation = () => (setShow(false), setshowConfirmation(true));

  const [step, setStep] = useState(1);
  const [invoiceCode, setInvoiceCode] = useState('');
  const [invoiceValue, setInvoiceValue] = useState('');
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
    return invoiceInput.checkValidity() ? (setStep(2), setInputError(false)) : setInputError(true);
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
                  onChange={(e) => setInvoiceCode(e.target.value)}
                />
                {
                  inputError && 
                  <Form.Text id="error-message" className="error">
                    Insira um código válido
                  </Form.Text>
                }
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
            <Form>
              <Form.Group>
                <Form.Control 
                  id="invoice-value"
                  placeholder="Insira o valor a transferir" 
                  className="invoice-input"
                  required
                  onChange={(e) => setInvoiceValue(e.target.value)}
                  type="number"
                />
              </Form.Group>
            </Form>

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
            <TransactionsItems transactions={apiTransaction}/>
          </Col>
        </div>
      )
    }
  }

  return (
    <Row className="mx-0">
      <HeaderTwo noBalance/>

      <Col xs="12" className="payment-form">
        {/* render steps accordingly to the step we are in */}
        {stepOne()}
        {stepTwo()}
      </Col>

      {/* show arrow to next step in step 1 */}
      { 
        step === 1 && <Col xs="12" md={{span: 6, offset: 3}}>
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
          <Link to="/home/2">
            <Button variant="outline-danger">CANCELAR</Button>
          </Link>
          <Button onClick={handleCloseError}>TENTAR NOVAMENTE</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}