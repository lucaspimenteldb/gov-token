import { Row, Col, Button } from "react-bootstrap";
import TransactionsItems from '../components/transactions/transactions';
import Charge from '../assets/charge-icon.svg';
import Pay from '../assets/pay-icon.svg';
import Header from '../components/header/header';

const transactions = [
  {
    date: "14 out, 2021",
    transactions: [
      {
        transactionType: "pay",
        toOrFrom: "Colaborador",
        amount: "800",
        icon: Pay,
        id: 7,
      },
      {
        transactionType: "charge",
        toOrFrom: "Governo",
        amount: "400",
        icon: Charge,
        id: 8,
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
        id: 9,
      }
    ]
  },
]

export default function AllTransactions() {
  return (
    <Row className="mx-0">
      <Header/>

      <Col xs="12" md={{span: 6, offset: 3}} className="mt-4">
        <h4>Extrato</h4>
      </Col>

      <Col xs="12" md={{span: 6, offset: 3}} className="mb-4 px-0">
        <TransactionsItems transactions={transactions}/>
      </Col>

      <Col className="d-grid" md={{span: 6, offset: 3}}>
        <Button variant="outline-primary">VER MAIS</Button>
      </Col>
    </Row>
  )
}