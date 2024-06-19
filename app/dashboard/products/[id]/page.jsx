import Image from "next/image";
import styles from "../../../ui/dashboard/products/SingleProducts/SingleProducts.module.css";
import {fetchCategory, fetchCategoryId,fetchProduct } from "../../../../lib/data";
import { updateProduct } from "../../../../lib/actions";
const SingleProductsPage = async ({params}) => {
  const { id } = params;
  const product = await fetchProduct(id);
  const category = await fetchCategoryId(product.idCategory)
  const allCategory = await fetchCategory(params);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.imgUrl} alt="" fill />
        </div>
        <div>Nome: {product.title}</div>
        <div>Category: {category.name}</div>
        <div>Description: {product.desc}</div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="img">Update image</label>
          <input  type="file" id="img" name="img" />
          <input  type="hidden" id="imgUrl" name="imgUrl" value={product.imgUrl}/>
          <label>Change Nome</label>
          <input type="text" name="title" defaultValue={product.title} />

          <select name="idCategory" required >
          <option disabled>Change Category</option>
          {allCategory.category.map((categories) => (
            <option key={categories.id} id={categories.id} value={categories.id}>{categories.name}
              </option>
          ))}
          </select>
          <textarea
        name="desc"
        id="desc"
        rows="16"
        defaultValue={product.desc}
      ></textarea>
      <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};
export default SingleProductsPage;
