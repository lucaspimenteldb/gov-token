import './transactions.scss';
import ChevronRight from '../../assets/chevron-right.svg';
import LogoSymbolBlue from '../../assets/logo-symbol-blue.svg';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import Charge from '../../assets/charge-icon.svg';
import Pay from '../../assets/pay-icon.svg';


export default function Transactions(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function share() {
    return 1;
  }

  return (
    <div>
      {/* array with all dates containing tansactions */}
      {props.transactions.map(date => (
        <div key={date.date}>
          <p className="by-date">{date.date}</p>

          {/* array with all transactions from the day  */}
          {date.transactions.map((transaction, i) => (
            <div 
              className="transactions-items" 
              key={i + transaction.date}
              onClick={handleShow}
            >
            <img src={transaction.sender === '2' ? Pay : Charge} alt="" className="icon"/>

            <section>
              <p className="type">
                {transaction.sender === '2' ? 'Pagamento Realizado' : 'Transferência Recebida'}
              </p>
              <p className="names">{transaction.sender === '1'  ? 'Jesse' : 'Walter'}</p>
            </section>

            <p className={transaction.transactionType}>
              {`${transaction.sender === '2' ? '-' : '+'} ${transaction.amount}`}
            </p>
            <img src={ChevronRight} alt="" className="modal-icon"/>
          </div>
          ))}

        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={LogoSymbolBlue} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-title">Transferência enviada</p>

          <section className="modal-info">
            <p className="info-title">Dados da transferência</p>

            {/* amount transfered */}
            <article>
              <p className="info-label">GOV Tokens</p>
              <p className="info-text amount">-8000</p>
            </article>
            {/* transfer date */}
            <article>
              <p className="info-label">Data da operação</p>
              <p className="info-text">04/10/2021 às 9:23</p>
            </article>
            {/* amount transfered */}
            <article>
              <p className="info-label">Para</p>
              <p className="info-text">Lucas Pimentel</p>
            </article>
          </section>

          {/* invoice code */}
          <section className="modal-info">
            <p className="info-title">Código do invoice</p>

            <p>15b4b65562ebd53f555ad08f439fb0fe3e6c9881b7aec9201a71a98db65562ebd53f555ad08b</p>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>FECHAR</Button>
          <Button onClick={share()}>COMPARTILHAR</Button>
        </Modal.Footer>
      </Modal>
    </div>  
  )
}