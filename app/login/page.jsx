import { authenticate } from "../../lib/actions";
import styles from "../ui/dashboard/login/login.module.css"

const  LoginPage = ()=>{
    return (
        <div className={styles.container}>
            <form action={authenticate} className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder="username" name="username"/>
                <input type="password" placeholder="password" name="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;