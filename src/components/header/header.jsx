import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoSymbol from '../../assets/logo-symbol.svg';
import Logo from '../../assets/logo-gov-token-white.svg';
import Convert from '../../assets/convert-icon.svg';
import Transactions from '../../assets/transactions-icon.svg';
import Support from '../../assets/support-icon.svg';
import Charge from '../../assets/charge-icon.svg';
import Pay from '../../assets/pay-icon.svg';
import './header.scss';

export default function Header(props) {
  const buttons = [
    {
      icon: Pay,
      title: "Pagar",
      iconClass: "pay--home",
      route: "/pay",
    },
    {
      icon: Charge,
      title: "Cobrar",
      iconClass: "charge--home",
      route: "/charge",
    },
    {
      icon: Transactions,
      title: "Extrato",
      iconClass: "transactions--home",
      route: "/all-transactions",
    },
    {
      icon: Convert,
      title: "Converter",
      iconClass: "convert--home",
      route: "",
    },
    {
      icon: Support,
      title: "Suporte",
      iconClass: "support--home",
      route: "",
    },
  ];

  return(
    <div className="px-0">
      <Col xs="12" className="px-0">
        <header className="header--home">
          <img src={LogoSymbol} alt="" />

          <section>
            <p className="name--home">Anderson Moura</p>
            <p>Edital Tal</p>
          </section>

          <Button variant="outline-light" className="button-support--home">?</Button>
        </header>
      </Col>

      <Col xs="12" className={"menu-actions--home" + (props.noBalance && !props.menu ? ' pb-0' : '')} >
        <Row>
          <Col xs="12" className={props.noBalance ? 'd-none' : ''}>
            <img src={Logo} alt="" />
            <h1>12.334,00</h1>
          </Col>

          {/* header with home menu */}
          <Col 
            xs="12" 
            className={"mt-4 mb-4 d-flex justify-content-between" + (props.menu ? '' : ' d-none')}
          >
            {
              buttons.map(button => (
                // menu buttons
                <Link to={button.route} key={button.title} className="links--home"> 
                  <Button className="actions--home">
                    <img src={button.icon} alt="" className={button.iconClass}/>
                  </Button>

                  <p>{button.title}</p>
                </Link>
              ))
            }
          </Col>
        </Row>
      </Col>
    </div>
  )
}