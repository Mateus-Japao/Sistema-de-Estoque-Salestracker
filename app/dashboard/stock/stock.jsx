import Image from "next/image";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import Link from "next/link";
import { deleteProductStock } from "../../../lib/actions";
import { fetchProduct, fetchStocks } from "../../../lib/data";

export const ProductsStock = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { products, count } = await fetchStocks(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for products..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td></td>
            <td>Title</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
        {products.map (async (product) => {
            const product1 = await fetchProduct(product.idCategory);
            return (
              <tr key={product.id}>
                <td>
                  <div className={styles.products}>
                    <Image
                      src={product.img || "/noproduct.jpg"}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.productsImage}
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product1.title}</td>
                <td>price</td> 
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        Edit
                      </button>
                    </Link>
                    <form action={deleteProductStock}>
                      <input type="hidden" name="id" value={product.id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};
