import { addProduct } from "../../../../lib/actions";
import { fetchCategory } from "../../../../lib/data";
import Styles from "../../../ui/dashboard/products/addProducts/addProducts.module.css";

export const Products = async ({searchParams}) => {
  const q = searchParams?.q || "";
     
  const { category } = await fetchCategory(q);
  return (
    <div className={Styles.container}>
    <form action={addProduct} className={Styles.form}>
      <input type="text" placeholder="title" name="title" required />
      <select name="categoryId" required>
          <option value="">Choose a Category</option>
          {category.map((categories) => (
            <option key={categories._id} value={categories._id.toString()}>{categories.type}</option>
          ))}
        </select>
      <input type="number" placeholder="price" name="price" required />
      <input type="number" placeholder="stock" name="stock" required />
      <input
        type="number"
        placeholder="installments"
        name="installments"
        required
      />
      <textarea
        name="desc"
        id="desc"
        rows="16"
        placeholder="Description"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};
export default Products