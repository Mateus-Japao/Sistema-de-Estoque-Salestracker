import Image from "next/image";
import styles from "../../../ui/dashboard/products/SingleProducts/SingleProducts.module.css";
import { fetchAllCategories,fetchCategoryId,fetchProduct } from "../../../../lib/data";
import { updateProduct } from "../../../../lib/actions";
const SingleProductsPage = async ({params}) => {
  const { id } = params;
  const product = await fetchProduct(id);
  const categories = await fetchAllCategories();
  const category = await fetchCategoryId(product.idCategory)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        <div>Nome: {product.title}</div>
        <div>Category: {category.name}</div>
        <div>Description: {product.desc}</div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Change Nome</label>
          <input type="text" name="title" placeholder={product.title} />

          <select name="idCategory" required >
          <option value={category.id}>Change Category</option>
          {categories.map((categories) => (
            <option  id={categories.id} value={categories.id}>{categories.name}
              </option>
          ))}
          </select>
          <textarea
        name="desc"
        id="desc"
        rows="16"
        placeholder={product.desc}
      ></textarea>
      <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};
export default SingleProductsPage;
