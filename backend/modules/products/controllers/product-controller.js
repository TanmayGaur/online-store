// import { ProductModel } from "../models/product-schema.js";
import { addNewProduct, viewAllProducts } from "../services/product-operations.js";

// export const getProducts = (request, response)=>{
//     response.status(200).json();
// }
// const newProduct = {
//     name: "Sample Product",
//     price: 150,
//     desc: "This is a sample product description.",
//     image: "sample-image-url"
// };
export const addProduct = async(request, response)=>{
    const product = request.body;
    console.log("product request body", product);
    try{
        console.log("doc: before");
        const doc = await addNewProduct(product);
        console.log("doc: ",doc);
        if(doc && doc._id){
            response.status(200).json({message:'New Pizza Added in DB', doc : doc});
        }
    }
    catch(err){
        response.status(500).json({message:'Unable to add New Pizza in DB'});
    }
}

export const viewAll = async (request, response)=>{
    const docs = await viewAllProducts();
    response.status(200).json({products: docs});
}