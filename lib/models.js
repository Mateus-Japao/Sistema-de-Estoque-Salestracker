import mongoose from "mongoose";

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
    unique: true,
  },
  img: {
    type: Buffer,
  },
  desc: {
    type: String,
  },
  id: {
    type: String,
    required: true,
  },
  idCategory: {
    type: String,
    required: true,
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
  idProduct:{
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  value:{
    type: Number,
    required: true,
  },
  type:{
    type: String,
    required: true,
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
  id: {
    type: String,
    required: true,
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
