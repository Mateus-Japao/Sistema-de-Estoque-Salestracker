
import { addCategory } from "../../../../lib/actions";
import Styles from "../../../ui/dashboard/products/addProducts/addProducts.module.css";

const addCategoryPage = () => {
  return (
    <div className={Styles.container}>
      <form action={addCategory} className={Styles.form}>
        <input type="text" placeholder="title" name="type" required />
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
export default addCategoryPage;
