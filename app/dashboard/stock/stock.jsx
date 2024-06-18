import Image from "next/image";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchCategoryId, fetchProduct, fetchStocks } from "../../../lib/data";
import Styles from "./cssStock.module.css";
export const ProductsStock = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { products, count } = await fetchStocks(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for products..." />
      </div>
       <div className={Styles.boxes}>
      {products.map(async (product) => {
        const product1 = await fetchProduct(product.idProduct);
        const category = await fetchCategoryId(product1.idCategory);
        return (
          <div key={product.id} className={Styles.productBox}>
            <div className={Styles.productImage}>
              <Image
                src={product1.imgUrl || "/noproduct.jpg"}
                alt={product1.title}
                width={100}
                height={100}
                className={styles.productImage}
                />
            </div>
            <div className={Styles.productDetails}>
              <h2 className={Styles.productTitle}>{product1.title}</h2>
              <p className={Styles.productCategory}>{category.name}</p>
              <p className={Styles.productQuantity}>
                Quantidade: {product.quantity}
              </p>
            </div>
          </div>
        );
      })}
      </div>

      <Pagination count={count} />
    </div>
  );
};
