import Image from "next/image";
import styles from "../../../ui/dashboard/products/SingleProducts/SingleProducts.module.css";
import { fetchProduct } from "../../../../lib/data";
import { updateProduct } from "../../../../lib/actions";
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
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label> Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label> Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label> Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />

          <select
            name="cat"
            id="cat"
            defaultValue={product.cat || ""}
          >
            <option value="general"> Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
          </select>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};
export default SingleProductsPage;
