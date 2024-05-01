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
          <label> Title</label>
          <input type="text" name="title" placeholder={transactions.title} />
          <label> Price</label>
          <input type="number" name="price" placeholder={transactions.price} />
          <label> Stock</label>
          <input type="number" name="stock" placeholder={transactions.stock} />

          <select name="cat" id="cat" defaultValue={transactions.cat || ""}>
            <option value="general"> Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
          </select>

          <button>Sell</button>
        </form>
      </div>
    </div>
  );
};
export default SingleTransactionsPage;
