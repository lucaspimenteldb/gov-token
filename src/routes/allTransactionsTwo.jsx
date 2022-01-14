import { Row, Col, Button } from "react-bootstrap";
import TransactionsItems from '../components/transactions/transactions';
import Charge from '../assets/charge-icon.svg';
import Pay from '../assets/pay-icon.svg';
import { useState, useEffect } from "react";
import HeaderTwo from "../components/header/headerTwo";

export default function AllTransactionsTwo() {
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
  
  return (
    <Row className="mx-0">
      <HeaderTwo/>

      <Col xs="12" md={{span: 6, offset: 3}} className="mt-4">
        <h4>Extrato</h4>
      </Col>

      <Col xs="12" md={{span: 6, offset: 3}} className="mb-4 px-0">
        <TransactionsItems transactions={apiTransaction}/>
      </Col>

      <Col className="d-grid" md={{span: 6, offset: 3}}>
        <Button variant="outline-primary">VER MAIS</Button>
      </Col>
    </Row>
  )
}