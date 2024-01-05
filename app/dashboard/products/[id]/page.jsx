import Image from "next/image"
import styles from "../../../ui/dashboard/products/SingleProducts/SingleProducts.module.css"
const SingleProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                <div>
                    Mateus Felipe
                </div>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label> Title</label>
                <input type="text" name="username" placeholder="LG Full HD" />
                <label> Price</label>
                <input type="number" name="number" placeholder="R$999,00" />               
                <label> Stock</label>
                <input type="number" name="number" placeholder="99" />    
   
                <select name="cat" id="cat">
                    <option value="gerneral"> Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="Phone">Phone</option>
                    <option value="Computer">Computer</option>
                </select>

                <button>Update</button>
                </form>
            </div>
        </div>
    )
}
export default SingleProductsPage