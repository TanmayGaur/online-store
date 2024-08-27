import React, { useContext } from "react";
import { CartContext } from "../../dashboard/context/cart-context";
import { Pay } from "../../payments/component/pay";

export const Cart = ()=>{
    const ctx = useContext(CartContext);
    const total = ()=>{
        return ctx.carts.reduce((sum, product)=>sum + product.price, 0);
    }
    return (
        <div>
            <p>Total Items in Cart {ctx.carts.length}</p>
            {ctx.carts.map(product =><>
                <p>{product.name} {product.price}</p>
            </>)}
            <p>Total Bill is {total()}</p>
            {ctx.carts.length>0 && <Pay total = {total()}/>}
        </div>
    )
}