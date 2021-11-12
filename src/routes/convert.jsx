import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import Header from '../components/header/header';
import LogoSymbolBlue from '../assets/logo-symbol-blue.svg';
import '../sass/convert.scss'
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Charge() {

  const [step, setStep] = useState(1);
  const [inputMessage, setInputMessage] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function cancelTransfer() {
    return (setStep(1), setInputMessage(false));
  }
  
  return (
    <Row className="mx-0">
      <Header noBalance/>

      <Col xs="12" className="convert-form">
      <Row>
          <Col xs="12" md={{span: 6, offset: 3}}>
            <h5>Converter GOV Tokens em Reais</h5>
            <p>Quantos GOV Tokens você deseja converter?</p>

            <Form>
              <Form.Group>
                <Form.Control 
                  id="invoice-value"
                  placeholder="Digite o valor a converter"
                  className="invoice-input"
                  required
                  type="number"
                />
                {inputMessage && <Form.Text id="error-message" className="error">Insira um valor antes de prosseguir</Form.Text>}
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Col>

      <Col className="d-grid convert-button" xs="12" md={{span: 6, offset: 3}}>
        <Button className="" onClick={handleShow}>
          CONVERTER
        </Button>
      </Col>

    
      {/* confirm email sent */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img src={LogoSymbolBlue} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="modal-info">
            <p className="info-title">A conversão foi solicitada</p>

            <p>Enviaremos um código de cobrança para o seu email. Com o código em mãos pague o invoice na aba PAGAR para converter os seus GOV Tokens</p>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>NOVA CONVERSÃO</Button>
          <Link to="/home">
            <Button variant="outline-primary">VOLTAR</Button>
          </Link>
        </Modal.Footer>
      </Modal>
      
    </Row>
  )
}