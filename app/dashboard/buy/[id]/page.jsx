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
        <input type="text" placeholder="{product.title}" name="title" value={product.title || ""} required />
          <label> Price</label>
          <input type="number" name="installments" />
          <button>Buy</button>
        </form>
      </div>
    </div>
  );
};
export default SingleProductsPage;
