import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';
import LogoSymbolBlue from '../assets/logo-symbol-blue.svg';
import Header from '../components/header/header';
import '../sass/support.scss';

export default function Support() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Row className="mx-0">
      <Header noBalance/>

      <Col xs="12" md={{span: 6, offset: 3}}  className="support-form">
        <Form.Group>
          <Form.Control 
            id="invoice-value-check"
            className="subject"
            placeholder="Qual o assunto?"
            required
          />
          <Form.Control 
            id="invoice-value-check"
            className="subject"
            as="textarea"
            placeholder="Digite a sua mensagem"
            required
          />

          <Row className="button-send">
            <Col className="d-grid">
              <Button onClick={handleShow} size="lg">ENVIAR DÚVIDA</Button>
            </Col>
          </Row>
        </Form.Group>
      </Col>

      {/* support sent */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img src={LogoSymbolBlue} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="modal-info">
            <p className="info-title">Dúvida enviada!</p>

            <p>Logo logo entraremos em contato pelo email com a resposta da sua dúvida</p>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/home">
            <Button>VOLTAR PARA PÁGINA INICIAL</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}