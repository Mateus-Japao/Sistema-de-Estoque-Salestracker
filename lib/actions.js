"use server";
import { revalidatePath } from "next/cache";
import { Category, Product, Stock, Transactions, User } from "./models";
import { conectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../app/auth";
import { uuid } from "uuidv4";
import { deleteImgS3, uploadToS3 } from "./uploadS3";

export const addUser = async (formData) => {
  const { username, email, password, isAdmin, img } =
    Object.fromEntries(formData);

  try {
    conectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const imgUrl = await uploadToS3(img, "userImage/");
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin,
      imgUrl: imgUrl,
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
  const user = await User.findById(id);

  try {
    conectToDB();
    await User.findByIdAndDelete(id);
    await deleteImgS3(user.imgUrl);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const addProduct = async (formData) => {
  const { title, price, stock, installments, desc, cat, category, img } =
    Object.fromEntries(formData);
  console.log(formData);
  try {
    conectToDB();

    const imgUrl = await uploadToS3(img, "productImage/");

    const newProduct = new Product({
      title,
      price,
      stock,
      installments,
      desc,
      cat,
      id: uuid(),
      idCategory: category,
      imgUrl,
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
  const { idProductValue, amount, value, date, desc } =
    Object.fromEntries(formData);

  try {
    conectToDB();
    const stock = await Stock.findOne({ idProduct: idProductValue });

    if (stock) {
      const total = ~~stock.quantity + ~~amount;
      const updateFields = {
        quantity: total,
      };
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
      await Stock.findOneAndUpdate(
        { idProduct: stock.idProduct },
        updateFields
      );
      const newTransaction = new Transactions({
        id: uuid(),
        idProduct: idProductValue,
        type: "BUY",
        amount,
        value,
        date,
        desc,
      });
      await newTransaction.save();
    } else {
      const newItem = new Stock({
        id: uuid(),
        idProduct: idProductValue,
        quantity: amount,
      });
      await newItem.save();
      const newTransaction = new Transactions({
        id: uuid(),
        idProduct: idProductValue,
        type: "BUY",
        amount,
        value,
        date,
        desc,
      });
      await newTransaction.save();
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }
  revalidatePath("/dashboard/stock");
  redirect("/dashboard/stock");
};
export const sellProdctStock = async (formData) => {
  const { idProductValue, amount, value, date, desc } =
    Object.fromEntries(formData);

  try {
    conectToDB();
    const stock = await Stock.findOne({ idProduct: idProductValue });

    if (stock) {
      const total = ~~stock.quantity - ~~amount;
      if (total < 0) return "Quantidade maior que a disponível!";
      const updateFields = {
        quantity: total,
      };
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
      await Stock.findOneAndUpdate(
        { idProduct: stock.idProduct },
        updateFields
      );
      const newTransaction = new Transactions({
        id: uuid(),
        idProduct: idProductValue,
        type: "SELL",
        amount,
        value,
        date,
        desc,
      });
      await newTransaction.save();
    } else {
      const newItem = new Stock({
        id: uuid(),
        idProduct: idProductValue,
        quantity: amount,
      });
      await newItem.save();
      const newTransaction = new Transactions({
        id: uuid(),
        idProduct: idProductValue,
        type: "SELL",
        amount,
        value,
        date,
        desc,
      });
      await newTransaction.save();
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }
  revalidatePath("/dashboard/stock");
  redirect("/dashboard/stock");
};

export const deleteProduct = async (formData) => {
  const { id, imgurl } = Object.fromEntries(formData);
  try {
    conectToDB();
    const valueStock = await Stock.findOne({ idProduct: id });

    if (valueStock) {
      console.log("não pode ser deletado");
    } else {
      await Product.deleteOne({ id: id });
    }
    await deleteImgS3(imgurl);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteCategory = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    conectToDB();
    const valueProduct = await Product.findOne({ idCategory: id });
    valueProduct
      ? console.log("não pode ser deletado")
      : await Category.deleteOne({ id: id });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/category");
};

export const updateUser = async (formData) => {
  const { id, username, email, isAdmin, password, img, imgUrl } =
    Object.fromEntries(formData);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    conectToDB();
   
    if (img.size>0) {
      var urlimg = await uploadToS3(img, "userImage/");
      deleteImgS3(imgUrl);
    }

    const updateFields = {
      id,
      username,
      email,
      isAdmin,
      password: hashedPassword,
      imgUrl: urlimg,
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
  const { id, title, idCategory, desc, img, imgUrl } =
    Object.fromEntries(formData);
    
  try {
    conectToDB();
     if (img.size>0) {
      var urlimg = await uploadToS3(img, "productImage/");
      deleteImgS3(imgUrl);
    }

    const updateFields = {
      title,
      idCategory,
      desc,
      imgUrl: urlimg,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Product.findOneAndUpdate({ id: id }, updateFields);

  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addCategory = async (formData) => {
  const { name, desc } = Object.fromEntries(formData);
   
  try {
    conectToDB();
    const newCategory = new Category({
      name,
      desc,
      id: uuid(),
    });
    await newCategory.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create category!");
  }
  revalidatePath("/dashboard/category");
  redirect("/dashboard/category");
};

export const updateCategory = async (formData) => {
  const { id, name } = Object.fromEntries(formData);

  try {
    conectToDB();
    const updateFields = {
      name,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Category.findOneAndUpdate({ id: id }, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }
  revalidatePath("/dashboard/category");
  redirect("/dashboard/category");
};

export const updateTransaction = async (formData) => {
  const { id, value, desc } = Object.fromEntries(formData);

  try {
    conectToDB();
    const updateFields = {
      value,
      desc,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Transactions.findOneAndUpdate({ id: id }, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }
  revalidatePath("/dashboard/transactions");
  redirect("/dashboard/transactions");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
    revalidatePath("/dashboard")
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
