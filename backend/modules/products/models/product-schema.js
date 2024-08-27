import mongoose, { SchemaTypes } from "mongoose";
const productSchema =new mongoose.Schema({
    // name:{type:SchemaTypes.String, maxLength:20, minLength:1, required:true},
    // price:{type:SchemaTypes.Number, min:100, max:500, required:true, default:200},
    // desc:{type:SchemaTypes.String},
    // image:{type:SchemaTypes.String, required:true}
    name: {
        type: SchemaTypes.String,
        unique: true,
        minLength: 1,
        maxLength: 25,
        required: true
    },
    price: {
        type: SchemaTypes.Number,
        min: 100,
        max: 1000,
        required: true,
        default: 200
    },
    desc: {
        type: SchemaTypes.String
    },
    image: {
        type: SchemaTypes.String,
        required: true
    }
});
export const ProductModel = mongoose.model("products", productSchema);