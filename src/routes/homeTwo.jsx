import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TransactionsItems from '../components/transactions/transactionsTwo';
import Charge from '../assets/charge-icon.svg';
import Pay from '../assets/pay-icon.svg';
import '../sass/home.scss'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import HeaderTwo from '../components/header/headerTwo';

export default function HomeTwo() {
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

  const [apiTransactions, setApiTransactions] = useState([]);
  const [user, setUser] = useState([]);

  return (
    <Row className="mx-0">
      <HeaderTwo menu/>

      <Col xs="12" md={{span: 6, offset: 3}} className="mt-4">
        <h6>Últimas transações</h6>
      </Col>
      <Col xs="12" md={{span: 6, offset: 3}} className="mb-4 px-0">
        <TransactionsItems transactions={apiTransactions}/>
      </Col>

      <Col xs="12" md={{span: 6, offset: 3}}>
        <Link className="d-grid" to="/all-transactions/2">
          <Button variant="outline-primary">VER EXTRATO COMPLETO</Button>
        </Link>
      </Col>

      <Footer/>
    </Row>
  )
}