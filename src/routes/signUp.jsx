import { useState } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../assets/logo-gov-token-white.svg';
import LogoSymbolBlue from '../assets/logo-symbol-blue.svg';
import Input from '../components/input/input';
import '../sass/signup.scss';

export default function SignUp() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(true);

  return (
    <Row className="mx-0">
      <Col xs="12" className="px-0">
        <header className="header--login">
          <img src={logo} alt="GOV Token"/>
        </header>
      </Col>

      <Col xs="12" className="mt-5 px-4">
        <h3 className="signup-title">Cadastro de usuários</h3>
      </Col>

      <form className="px-4">
        <Col xs="12" className="mt-4">
          <Input label="Email" type="email" placeholder={'Digite o seu email'} />
        </Col>
        <Col xs="12" className="mt-4">
          <Input label="Confirmar email" type="email" placeholder={'Digite o seu email'} />
        </Col>

        <Col xs="12" className="mt-4">
          <Input label="Senha" type="password" placeholder={'Digite a sua senha'} iconPassword/>
        </Col>
        <Col xs="12" className="mt-4">
          <Input label="Confirmar senha" type="password" placeholder={'Digite a sua senha'} iconPassword/>
        </Col>

        <Col xs="12" className="mt-5 mb-5 d-grid">
          <Button size="lg" className="button-signup" onClick={handleShow}>
            CADASTRAR
          </Button>
        </Col>
      </form>

      {/* confirm payment modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img src={LogoSymbolBlue} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="modal-info">
            <p className="info-title">Cadastro realizado com sucesso!</p>

            <p>Enviamos um email com o link para verificação da sua conta. Para finalizar o seu cadastro basta acessar o link fornecido na mensagem.</p>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button>ENTRAR</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}