import { ProductModel } from "../models/product-schema.js";

export const addNewProduct = async (product)=>{
    console.log("in addnewproduct")
    try{
        const doc = await ProductModel.create(product);
        console.log("doc in addnewproduct:",doc);
        return doc;
    }
    catch(err){
        throw err;
    }
}

export const viewAllProducts = async ()=>{
    try{
        const docs = await ProductModel.find({}).exec();
        return docs;
    }
    catch(err){
        throw err;
    }
}