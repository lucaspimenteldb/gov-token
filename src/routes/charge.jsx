import { Row, Col, Button, Form } from "react-bootstrap";
import Header from '../components/header/header';
import '../sass/makepayment.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Charge() {

  const [step, setStep] = useState(1);
  const [inputMessage, setInputMessage] = useState(false);
  const [invoiceValue, setInvoiceValue] = useState(0);
  const [invoiceCode, setInvoiceCode] = useState(12050986545234);
  const [copyMessage, setCopyMessage] = useState(false);

  function copyInvoice() {
    navigator.clipboard.writeText(invoiceCode).then(invoice => {
      return setCopyMessage(true);
    })
  }

  function nextStep() {
    const invoiceInput = document.getElementById('invoice-value');
    const invoiceInputCheck = document.getElementById('invoice-value-check');
    setInvoiceValue(invoiceInput.value);
    return invoiceInput.checkValidity() ? (
        setStep(2), 
        setInputMessage(false)
      ) : 
      setInputMessage(true);
  }
  function cancelTransfer() {
    return (setStep(1), setInputMessage(false));
  }
  
  function stepOne() {
    if (step === 1) {
      return (
        <Row>
          <Col xs="12" md={{span: 6, offset: 3}}>
            <h5>Cobrar GOV Tokens</h5>
            <p>Quantos GOV Tokens você deseja receber?</p>

            <Form>
              <Form.Group>
                <Form.Control 
                  id="invoice-value"
                  placeholder="Digite o valor"
                  className="invoice-input"
                  required
                  type="number"
                />
                {inputMessage && <Form.Text id="error-message" className="error">Insira um valor antes de prosseguir</Form.Text>}
              </Form.Group>
            </Form>
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
            <p>Você está cobrando</p>

            <p className="invoice-titles">GOV Tokens</p>
            <h1>{invoiceValue}</h1>

            <p className="invoice-titles">Código do pagamento</p>
            <Form>
              <Form.Group>
                <Form.Control 
                  id="invoice-value-check"
                  className="invoice-input"
                  readOnly
                  value={invoiceCode}
                />
                {copyMessage && <Form.Text className="success">Código copiado!</Form.Text>}
                
              </Form.Group>
            </Form>

            <Button variant="light" className="copy-invoice" onClick={() => copyInvoice()}>
              Copiar código
            </Button>
          </Col>
        </Row>
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
            COBRAR
          </Button>
        </Col>
      }

      {/* go back to home */}
      { 
        step === 2 && 
        <Col xs="12" md={{span: 6, offset: 3}} className="mt-4">
          <Link to="/home">
            <Button variant="outline-primary">
              Voltar à página inicial
            </Button>
          </Link>
        </Col>
      }
      
    </Row>
  )
}