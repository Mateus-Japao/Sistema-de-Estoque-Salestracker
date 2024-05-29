import Image from "next/image";
import styles from "../../../ui/dashboard/products/SingleProducts/SingleProducts.module.css";
import { allFetchTransactions } from "../../../../lib/data";
import { updateTransaction } from "../../../../lib/actions";

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
        <form action={updateTransaction} className={styles.form}>
          <input type="hidden" name="id" value={transactions.id} />
          <label> Price</label>
          <input type="number" name="value" placeholder={transactions.value} />
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
