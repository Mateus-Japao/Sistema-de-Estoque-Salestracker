import { addUser } from "../../../../lib/actions";
import Styles from "../../../ui/dashboard/users/addUser/addUser.module.css";
const addUserPage = () => {
  return (
    <div className={Styles.container}>
      <form action={addUser} className={Styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <select name="isAdmin" id="isAdmin">
          <option value={true}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default addUserPage;
