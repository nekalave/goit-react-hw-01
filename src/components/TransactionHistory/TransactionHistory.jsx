import css from "./TransactionHistory.module.css";


export const TransactionHistory = ({items}) => {
  return (
    <section className={css.transactionSection}>
    <table className={css.transactionHistory}>
      <thead>
      <tr>
        <th className={css.transactionTh}>Type</th>
        <th className={css.transactionTh}>Amount</th>
        <th className={css.transactionTh}>Currency</th>
      </tr>
      </thead>
      <tbody className={css.transactionTBody}>
      {items.map(transaction => (
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      ))}
      </tbody>
    </table>
    </section>
  );
};
