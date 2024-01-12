import { User } from "./models";
import { conectToDB } from "./utils";

export const fetchUsers = async () => {
try {
    conectToDB()
    const users = await User.find();
    return users
}catch(error){
    console.log(error)
    throw new Error("Failed to fetch users")
}

}
