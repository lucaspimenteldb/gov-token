import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TransactionsItems from '../components/transactions/transactions';
import Charge from '../assets/charge-icon.svg';
import Pay from '../assets/pay-icon.svg';
import '../sass/home.scss'
import Header from '../components/header/header';

export default function Home() {
  
  const transactions = [
    {
      date: "14 out, 2021",
      transactions: [
        {
          transactionType: "pay",
          toOrFrom: "Colaborador",
          amount: "800",
          icon: Pay,
          id: 4,
        },
        {
          transactionType: "charge",
          toOrFrom: "Governo",
          amount: "400",
          icon: Charge,
          id: 5,
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
          id: 6,
        }
      ]
    },
  ]

  return (
    <Row className="mx-0">
      <Header menu/>

      <Col xs="12" md={{span: 6, offset: 3}} className="mt-4">
        <h6>Últimas transações</h6>
      </Col>
      <Col xs="12" md={{span: 6, offset: 3}} className="mb-4 px-0">
        <TransactionsItems transactions={transactions}/>
      </Col>

      <Col xs="12" md={{span: 6, offset: 3}}>
        <Link className="d-grid" to="/all-transactions">
          <Button variant="outline-primary">VER EXTRATO COMPLETO</Button>
        </Link>
      </Col>
    </Row>
  )
}