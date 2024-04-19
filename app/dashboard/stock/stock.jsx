import Image from "next/image";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import Link from "next/link";
import { deleteProduct } from "../../../lib/actions";
import { fetchStocks } from "../../../lib/data";

export const ProductsStock = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { products, count } = await fetchStocks(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for products..." />
        <Link href='/dashboard/products/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (


            <tr key={product.id}>
              <td> <div className={styles.products}>
                <Image src={product.img || "/noproduct.jpg"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productsImage} />
                {product.title}
              </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().splice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/sell/${product.id}`}>
                    <button className={` ${styles.button} ${styles.sell}`}>Sell</button>
                  </Link>
                  <Link href={`/dashboard/stock/${product.id}`}>
                    <button className={` ${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteProduct}>
                     <input type="hidden" name="id"value={product.id} />
                     <button className={` ${styles.button} ${styles.delete}`}>
                      Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  );
};
