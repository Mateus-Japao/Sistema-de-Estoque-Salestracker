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
      <select name="category" required>
          <option value="" className={Styles.optionDisabled}>Choose a Category</option>
          {category.map((categories) => (
            <option key={categories.id} id={categories.id} value={categories.id}>{categories.name}
              </option>
          ))}
        </select>
        <input  type="file" id="img" name="img" />
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