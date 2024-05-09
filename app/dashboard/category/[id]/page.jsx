import styles from "../../../ui/dashboard/products/SingleProducts/SingleProducts.module.css";
import { fetchCategoryId } from "../../../../lib/data";
import { updateCategory } from "../../../../lib/actions";
const SingleProductsPage = async ({ params }) => {
  const { id } = params;
  const category = await fetchCategoryId(id);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateCategory} className={styles.form}>
          <input type="hidden" name="id" value={category.id} />
          <label> Category Name</label>
          <input type="text" name="name" placeholder={category.name} />
          <button>Change Category</button>
        </form>
      </div>
    </div>
  );
};
export default SingleProductsPage;
