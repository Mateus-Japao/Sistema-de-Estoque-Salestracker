import Image from "next/image";
import styles from "../../../ui/dashboard/products/SingleProducts/SingleProducts.module.css";
import { fetchProduct } from "../../../../lib/data";
import { addProductStock } from "../../../../lib/actions";
const SingleProductsPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        <div>{product.title}</div>
      </div>
      <div className={styles.formContainer}>
        <form action={addProductStock} className={styles.form}>
          <input type="hidden" name="idProduct" value={product.id} />
          <input type="hidden" name="idCategory" value={product.idCategory} />
          <label>Amount</label>
          <input type="number" name="amount" />
          <label> Price total</label>
          <input type="number" name="price" />
          <label>Installments</label>
          <input type="number" name="installments" />
          <label> Data</label>
          <input type="date" name="date" />
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder="Description"
          ></textarea>
          <button>Buy</button>
        </form>
      </div>
    </div>
  );
};
export default SingleProductsPage;
