import { Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../assets/logo-gov-token-white.svg';
import Input from '../components/input/input';
import '../sass/login.scss';

export default function Login() {
  return (
    <Row>
      <Col xs="12" className="px-0">
        <header className="header--login">
          <img src={logo} alt="GOV Token"/>
        </header>
      </Col>

      <form className="mt-5 px-4">
        <Col xs="12" md={{span: 6, offset: 3}} className="mt-4">
          <Input label="Usuário" type="email" placeholder={'Digite o seu email'} />
        </Col>

        <Col xs="12" md={{span: 6, offset: 3}} className="mt-4">
          <Input label="Senha" type="password" placeholder={'Digite a sua senha'} iconPassword/>
        </Col>

        <Col xs="12" md={{span: 6, offset: 3}} className="mt-4 d-flex align-center">
          <input type="checkbox" id="remember-user" className="remember--login"/>
          <label htmlFor="remember-user" className="remember--login-label">Lembrar meu usuário</label>
        </Col>

        <Col xs="12" md={{span: 6, offset: 3}} className="mt-5 mb-5">
          <Link to="/home" className="d-grid gap-2">
            <Button size="lg" className="button--login">ENTRAR</Button>
          </Link>
        </Col>
      </form>

      <Col xs="12" md={{span: 6, offset: 3}} className="px-4 d-flex flex-column">
        <Link to="/forgot-password">Esqueci minha senha</Link>
        <Link to="/asd">Está com problemas? <span>Falar com o suporte</span></Link>
      </Col>

      <Col xs="12" md={{span: 6, offset: 3}} className="px-4">
        <h4 className="label-sign-up--login">Ainda não tem cadastro?</h4>

        <Link to="/sign-up">
          <Button 
            variant="outline-primary" 
            size="lg" 
            className="button-sign-up--login" 
          >
            QUERO ME CADASTRAR
          </Button>
        </Link>
      </Col>
    </Row>
  )
}