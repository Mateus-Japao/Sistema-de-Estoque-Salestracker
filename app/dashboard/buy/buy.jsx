import Image from "next/image";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import Link from "next/link";
import { fetchCategoryId, fetchProducts } from "../../../lib/data";


export const Buy = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { products, count } = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for products..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Category</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {products.map(async (product) => {
            const category = await fetchCategoryId(product.idCategory);
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
                <td>{ category.name}</td>

                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/buy/${product.id}`}>
                      <button className={` ${styles.button} ${styles.buy}`}>
                        Buy
                      </button>
                    </Link>
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
