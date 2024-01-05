import Image from "next/image"
import styles from "../../../ui/dashboard/users/SingleUser/SingleUser.module.css"

const SingleUserPage = () => {
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
                <label> Username</label>
                <input type="text" name="username" placeholder="Mateus Felipe" />
                <label> Email</label>
                <input type="email" name="Email" placeholder="@japazin.com" />               
                <label> password</label>
                <input type="password" name="password" placeholder="******" />    
                <label> Username</label>
                <select name="isAdmin" id="isAdmin">
                <option value={true} selected>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}
export default SingleUserPage