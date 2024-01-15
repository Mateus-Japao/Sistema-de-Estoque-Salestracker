User
import { User } from "./models";
import { conectToDB } from "./utils";

export const fetchUsers = async (q) => {
    const regex = RegExp(q, "i")
    try {
        conectToDB()
        const users = await User.find({username: { $regex: regex }});
        return users
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users")
    }

}