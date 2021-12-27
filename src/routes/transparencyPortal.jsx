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
    const tBody = [
        {
            project: 1,
            code: 'asklj895kjehf80asdhfiuh01assdf',
            origin: 'Investtools',
            destiny: 'Marcos Jardim',
            date: '21/12/2020',
            time: '10:34',
            tokens: '10.000,00'
        },
        {
            project: 2,
            code: 'a8324h2378h4ha0ua87j4w4awe',
            origin: 'Blockchain Studio',
            destiny: 'Eric Arroio',
            date: '20/12/2020',
            time: '10:49',
            tokens: '23.124,00'
        },
    ]

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
                            tBody.map(body => ( 
                                <tr>
                                    <td>{body.project}</td>
                                    <td>{body.code}</td>
                                    <td>{body.origin}</td>
                                    <td>{body.destiny}</td>
                                    <td>{body.date}</td>
                                    <td>{body.time}</td>
                                    <td className='tokens-transfered'>{body.tokens}</td>
                                </tr> 
                            ))
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}