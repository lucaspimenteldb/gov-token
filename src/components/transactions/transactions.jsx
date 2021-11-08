import './transactions.scss';
import ChevronRight from '../../assets/chevron-right.svg'

export default function Transactions(props) {
  return (
    <div>
      {/* array with all dates containing tansactions */}
      {props.transactions.map(date => (
        <div key={date.date}>
          <p className="by-date">{date.date}</p>

          {/* array with all transactions from the day  */}
          {date.transactions.map(transaction => (
            <div className="transactions-items" key={transaction.id + transaction.transactionType}>
            <img src={transaction.icon} alt="" className="icon"/>

            <section>
              <p className="type">
                {transaction.transactionType === 'pay' ? 'Pagamento Realizado' : 'Transferência Recebida'}
              </p>
              <p className="names">{transaction.toOrFrom}</p>
            </section>

            <p className={transaction.transactionType}>
              {`${transaction.transactionType === 'pay' ? '-' : '+'} ${transaction.amount}`}
            </p>
            <img src={ChevronRight} alt="" className="modal-icon"/>
          </div>
          ))}

        </div>
      ))}
    </div>  
  )
}