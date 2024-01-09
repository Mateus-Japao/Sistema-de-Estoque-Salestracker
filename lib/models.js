import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type:Boolean,
        default: true,
    },
    isActive: {
        type:Boolean,
        default: true,
    }
});
const productSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    price:{
        type: Number,
        required: true,
        min:0,
    },
    installments:{
        type: Number,
        required: true,
        min:0,
    },
    price:{
        type: Number,
        required: true,
        min:0,
    },
    stock:{
        type: Number,
        required: true,
        min:0,
    },
    img: {
        type: String,
    },
    desc:{
        type:String,
        required: true
    }

});

export const User = mongoose.model.User || mongoose.model ("User", userSchema);

export const Product = mongoose.model.Product || mongoose.model ("Product", productSchema);