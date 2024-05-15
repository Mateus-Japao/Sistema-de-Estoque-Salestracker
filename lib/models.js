import mongoose, { isValidObjectId } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  img: {
    type: String,
  },
  desc: {
    type: String,
  },
  id: {
    type: String,
  },
  idCategory: {
    type: String,
  },
});
const stockSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  idProduct: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const transactionsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  value:{
    type: Number,
  },
  type:{
    type: String,
  },
  date: {
    type:Date,
    required: true,
  },
  desc: {
    type: String,
  },
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  id: {
    type: String,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export const Stock =
  mongoose.models.Stock || mongoose.model("Stock", stockSchema);

export const Transactions =
  mongoose.models.Transactions ||
  mongoose.model("Transactions", transactionsSchema);

export const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
