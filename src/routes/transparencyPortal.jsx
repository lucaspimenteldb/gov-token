import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../assets/logo-gov-token-white.svg';
import '../sass/transparency.scss'

export default function TransparencyPortal() {
    const cards = [
        {
            title: 'Projetos em Execução',
            value: 10,
        },
        {
            title: 'GOV Tokens Emitidos',
            value: 10,
            icon: true,
        },
        {
            title: 'GOV Tokens Transacionados',
            value: 10,
            icon: true,
        },
        {
            title: 'GOV Tokens Restantes',
            value: 10,
            icon: true,
        },
        {
            title: 'Transações Executadas',
            value: 10,
        },
        {
            title: 'e-CPF/e-CNPJ Cadastrados',
            value: 10,
        },
    ]
    const tHeads = ['Projeto', 'Código de Transferência', 'Origem', 'Destino', 'Data', 'Horário', 'Valores Transacion.']
    const [body, setBody] = useState([]);
    const wallets = [1, 2];

    useEffect(() => {
        const axios = require('axios');
        const fetchData = () => {
            wallets.forEach(async wallet => {
                try {
                    const response = await axios.get(`http://govtoken.com.br:44888/v1/transactions/${wallet}`);
                    const arrayWithProject = response.data;
                    arrayWithProject.forEach(ar => ar.project = wallet);

                    setBody(oldArray => [...oldArray, ...arrayWithProject]);
                } catch (error) {
                    console.error(error.message);
                }
            })
        }

        fetchData();
    }, []);

    

    const formatDate = (date) => {
        const dates = date.split('-');
        return `${dates[2]}-${dates[1]}-${dates[0]}`
    }


    return (
        <Row id="transparency">
            <Col xs="12" className="px-0">
                <header className="header">
                    <img src={logo} alt="GOV Token" />
                </header>
            </Col>

            <Col xs="12" className="px-5 d-flex flex-column">
                <h3 className='title'>Portal da Transparência</h3>
            </Col>

            <Col 
                xs="12" 
                className="mt-4 px-5 d-flex justify-content-cenreactter flex-wrap"
                style={{flex: 1}}
            >
                {
                    cards.map(card => (
                        <div className='transparency-cards'>
                            <p className='transparency-cards--title'>{card.title}</p>
                            <h3 className='transparency-cards--value'>{card.value}</h3>
                        </div>
                    )   
                )}
            </Col>

            <Col xs="12" className='mt-5 px-5'>
                <Table hover respo size="sm">
                    <thead>
                        <tr>
                            {
                                tHeads.map(head => ( <th className='table-heads'>{head}</th> ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            body.map(body => ( 
                                <tr>
                                    <td>{body.project}</td>
                                    <td title={body.txhash}>{body.txhash.substring(0, 20)}...</td>
                                    <td>{body.sender}</td>
                                    <td>{body.receiver}</td>
                                    <td>{formatDate(body.date.split(' ')[0])}</td>
                                    <td>{body.date.split(' ')[1]}</td>
                                    <td className='tokens-transfered'>{body.amount}</td>
                                </tr> 
                            ))
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}