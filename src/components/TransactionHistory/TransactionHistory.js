import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

export function Transactions({ transactions }) {
  return (
    <div className="container">
      <h2 className={s.title}>Task-4: transactions history</h2>
      <section className={s.transactions}>
        <table className={s.transactionHistory}>
          <thead className={s.tableHead}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => {
              const { id, type, amount, currency } = transaction;
              return (
                <tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

Transactions.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
