
import Image from "next/image"
import styles from "../../ui/dashboard/products/products.module.css"
import Search from "../../ui/dashboard/search/search"
import Pagination from "../../ui/dashboard/pagination/pagination"
import Link from "next/link"

const Products = () => {
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
          <tr>
            <td> <div className={styles.products}>
              <Image src="/noproduct.jpg"
                alt=""
                width={40}
                height={40}
                className={styles.productsImage} />
             LG Full HD
            </div>
            </td>
            <td>Desc</td>
            <td>$500</td>
            <td>13.01.2024</td>
            <td>99</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={` ${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={` ${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
    )
  }
  
  export default Products