import Image from "next/image";
import styles from "../../../ui/dashboard/products/SingleProducts/SingleProducts.module.css";
import { fetchProduct, fetchProductStock } from "../../../../lib/data";
import { sellProdctStock } from "../../../../lib/actions";
const SingleProductsPage = async ({ params }) => {
  const { id } = params;
  const productStock = await fetchProductStock(id);
  const product = await fetchProduct(productStock.idProduct);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        <div>{product.title}</div>
      </div>
      <div className={styles.formContainer}>
        <form action={sellProdctStock} className={styles.form}>
          <input type="hidden" name="idProductValue" value={product.id} />
          <label>Amount</label>
          <input placeholder={`${productStock.quantity}`} type="number" name="amount" />
          <label> Price total</label>
          <input type="number" name="value" />
          <label> Data</label>
          <input type="date" name="date" />
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder="Description"
          ></textarea>
          <button>Sell</button>
        </form>
      </div>
    </div>
  );
};
export default SingleProductsPage;
