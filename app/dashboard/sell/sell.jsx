import Image from "next/image";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import Link from "next/link";
import { fetchCategoryId, fetchProduct, fetchStocks } from "../../../lib/data";


export const Sell = async ({ searchParams }) => {
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
            <td>Title</td>
            <td>Category</td>
            <td>Quantity</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {products.map(async (product) => {
            const product1 = await fetchProduct(product.idProduct);
            const category = await fetchCategoryId(product1.idCategory)
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
                    {product1.title}
                  </div>
                </td>
                <td>{category.name}</td>
                <td>{product.quantity}</td>

                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/sell/${product.id}`}>
                      <button className={` ${styles.button} ${styles.buy}`}>
                        Sell
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
