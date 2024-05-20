import Link from "next/link";
import {
  fetchCategoryId,
  fetchProduct,
  fetchTransactions,
} from "../../../lib/data";
import Pagination from "../../ui/dashboard/pagination/pagination";
import styles from "./transactions.module.css";

const Transactions = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { transactions, count } = await fetchTransactions(q, page);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Category</td>
            <td>Status</td>
            <td>Date</td>
            <td>Quantity</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map(async (transaction) => {
            const product = await fetchProduct(transaction.idProduct);
            const category = await fetchCategoryId(product.idCategory);
            return (
              <tr key={transaction.id}>
                {" "}
                <td>
                  <div className={styles.user}>{product.title}</div>
                </td>
                <td>{category.name}</td>
                <td>
                  {" "}
                  <span className={`${styles.status} ${styles.done}`}>
                    {" "}
                    {transaction.type}
                  </span>
                </td>
                <td>{transaction.date.toLocaleDateString("pt-BR")}</td>
                <td>{transaction.amount}</td>
                <td>
                  <div className={styles.buttons}>
                    {" "}
                    <Link href={`/dashboard/transactions/${transaction.id}`}>
                      <button className={` ${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form>
                      <input type="hidden" name="id" value={transaction.id} />
                      <button  className={` ${styles.button} ${styles.delete}`}>
                       Cancelar inativo
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};
export default Transactions;
