import Image from "next/image";
import styles from "../../../ui/dashboard/products/SingleProducts/SingleProducts.module.css";
import { allFetchTransactions, fetchTransactions } from "../../../../lib/data";

const SingleTransactionsPage = async ({ params }) => {
  const { id } = params;
  const transactions = await allFetchTransactions(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        <div>{transactions.title}</div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value={transactions.id} />
          <label> Price</label>
          <input type="number" name="price" placeholder={transactions.value} />
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder={transactions.desc}
          ></textarea>
          <button>Update inativo</button>
        </form>
      </div>
    </div>
  );
};
export default SingleTransactionsPage;
