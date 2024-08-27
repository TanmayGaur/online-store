// Single Pizza Display
import React, { useContext} from "react";
import { CartContext } from "../context/cart-context.js";
 
export const Product = ({product})=>{
    const ctx = useContext(CartContext);
    const myStyle = {width: '18rem'};
    const addToCart = ()=>{
        ctx.addCart({...product});
        console.log("add to cart click on ", product)
    }
    return(
        <div className ="card m-2" style={myStyle}>
        <img src={product.image} className ="card-img-top" alt="..." />
        <div className ="card-body">
            <h5 className ="card-title">{product.name}</h5>
            <p className ="card-text">{product.price}</p>
            <button onClick={addToCart} className ="btn btn-primary">Add to cart</button>
        </div>
        </div>
    )
}