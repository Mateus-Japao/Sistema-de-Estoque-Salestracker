User;
import { Category, Product, Stock, Transactions, User } from "./models";
import { conectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = RegExp(q, "i");
  const ITEM_PER_PAGE = 10;
  try {
    conectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
export const fetchUser = async (id) => {
  try {
    conectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};
export const fetchProducts = async (q, page) => {
  const regex = RegExp(q, "i");
  const ITEM_PER_PAGE = 10;
  try {
    conectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
   
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
   
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
};
export const fetchProduct = async (id) => {
  try {
    conectToDB();
    const product = await Product.findOne({id:id});
    return product;
    
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch product");
  }
};

export const fetchStocks = async (q, page) => {
  const regex = RegExp(q, "i");
  const ITEM_PER_PAGE = 10;
  try {
    conectToDB();
    const count = await Stock.find({ title: { $regex: regex } }).count();
    const products = await Stock.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
};
export const fetchProductStock = async (id) => {
  try {
    conectToDB();
    const product = await Stock.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch product");
  }
};
export const fetchTransactions = async (q, page) => {
  const regex = RegExp(q, "i");
  const ITEM_PER_PAGE = 10;
  try {
    conectToDB();
    const count = await Transactions.find({ title: { $regex: regex } }).count();
    const transactions = await Transactions.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, transactions };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
};
export const allFetchTransactions = async (id) => {
  try {
    conectToDB();
    const transaction = await Transactions.findById(id);
    return transaction;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Transactions");
  }
};

export const fetchCategory = async (q, page) => {
  const regex = RegExp(q, "i");
  const ITEM_PER_PAGE = 10;
  try {
    conectToDB();
    const count = await Category.find({ name: { $regex: regex } }).count();
    const category = await Category.find({ name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, category };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch category");
  }
};
export const fetchCategoryId = async (id) => {
  try {
    conectToDB();
    const category = await Category.findOne({id:id});
    return category;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch category");
  }
};
export const fetchAllCategories = async () => {
  try {
    conectToDB();
    const categories = await Category.find({});
    return categories;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch categories");
  }
};
