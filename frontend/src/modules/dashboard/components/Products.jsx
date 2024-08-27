import React from "react";
import { Product } from "./product";
 
export const Products = ({products})=>{
    return(
        <>{products.map(product=><Product key={product.id} product = {product}/>)}</>
    )
}