
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import Link from "next/link";
import { deleteCategory, deleteProductStock } from "../../../lib/actions";
import { fetchCategory } from "../../../lib/data";

export const CategoryProduct = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { category, count } = await fetchCategory(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for products..." />
        <Link href="/dashboard/category/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Category name</td>
          </tr>
        </thead>
        <tbody>
          {category.map((categories) => (
            <tr key={categories.id}>
              <td>
                <div className={styles.products}>
                  {categories.type}
                </div>
              </td>
              <td>{categories.desc}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/category/${categories.id}`}>
                    <button className={` ${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link> 
                  <form action={deleteCategory}>
                    <input type="hidden" name="id" value={categories.id} />
                    <button className={` ${styles.button} ${styles.delete}`}>
                     Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};
