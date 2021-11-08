import { Row, Col, Button, Form } from "react-bootstrap";
import TransactionsItems from '../components/transactions/transactions';
import Charge from '../assets/charge-icon.svg';
import Pay from '../assets/pay-icon.svg';
import Header from '../components/header/header';
import ArrowWhite from '../assets/arrow-white.svg'
import '../sass/makepayment.scss'
import { useState } from "react";

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
          <Col xs="12">
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
          <Col xs="12">
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
          <Col xs="12" className="mt-4">
            <h6 className="last-transactions">Últimas transações</h6>
          </Col>

          <Col xs="12" className="mb-4 px-0">
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
        { step === 1 && <h5>Realizar transferências</h5>}

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
            <img src={ArrowWhite} alt="" />
          </Button>
        </Col>
      }

      {/* show confirm and cancel button in step 2 */}
      { 
        step === 2 && 
        <Col xs="12" className="mt-4 d-flex flex-column">
          <Button className="confirm-transfer" size="lg">
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
      
    </Row>
  )
}