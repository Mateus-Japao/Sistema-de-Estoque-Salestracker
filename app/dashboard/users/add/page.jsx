import Styles from "../../../ui/dashboard/users/addUser/addUser.module.css"
const addProductsPage = () => {
    return (
        <div className={Styles.container}>
            <form action="" className={Styles.form}>
                <input type="text" placeholder='Username' name='username' require />
                <input type="email" placeholder='email' name='email' require />
                <input type="password" placeholder='password' name='password' require />
                <select name="isAdmin" id="isAdmin">
                    <option value={true} selected>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default addProductsPage