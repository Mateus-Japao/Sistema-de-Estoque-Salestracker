"use server";
import { revalidatePath } from "next/cache";
import { Product, Stock, Transactions, User } from "./models";
import { conectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../app/auth";

export const addUser = async (formData) => {
  const { username, email, password, isAdmin } = Object.fromEntries(formData);

  try {
    conectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    conectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const addProduct = async (formData) => {
  const { title, price, stock, installments, desc, cat } =
    Object.fromEntries(formData);

  try {
    conectToDB();
    const newProduct = new Product({
      title,
      price,
      stock,
      installments,
      desc,
      cat,
    });
    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const addProductStock = async (formData) => {
  const { title, price, stock, installments, desc, cat } =
    Object.fromEntries(formData);
   const type ="Buy"
  try {
    conectToDB();
    const newProduct = new Stock({
      title,
      price,
      stock,
      installments,
      desc,
      cat,
    });   
     const newTransaction = new Transactions({
      title,
      price,
      stock,
      installments,
      desc,
      cat,
      type
    });
    await newTransaction.save();
    await newProduct.save();

  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }
  revalidatePath("/dashboard/stock");
  redirect("/dashboard/stock");
};


export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    conectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};
export const deleteProductStock = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    conectToDB();
    await Stock.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/stocks");
};

export const deleteTransactions = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    conectToDB();
    await Transactions.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/transactions");
};


export const updateUser = async (formData) => {
  const { id, username, email, isAdmin } = Object.fromEntries(formData);

  try {
    conectToDB();
    const updateFields = {
      id,
      username,
      email,
      isAdmin,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  const { id, title, price, stock, installments, desc } =
    Object.fromEntries(formData);

  try {
    conectToDB();
    const updateFields = {
      id,
      title,
      price,
      stock,
      installments,
      desc,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};