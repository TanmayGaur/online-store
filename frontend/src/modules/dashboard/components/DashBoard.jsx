import React, { useEffect, useState } from "react";
import { Header } from "../../../shared/components/Header";
import { Product } from "./product";
import { getApiCall } from "../../../shared/services/api-client.js";
import { Products } from "./Products";
import { CartContext } from "../context/cart-context.js";
import { CartView } from "../../cart/pages/CartView";

export const DashBoard = ()=>{
    const [loading, setLoading] = useState(true);
    const [pizzas, setPizzas] = useState([]);
    const [errors, setErrors] = useState(null);
    // let carts = [];
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        // learn react life-cycle
        getPizzas();
    },[])
    const addCart = (product)=>{
        const c = [...carts];
        c.push(product);
        setCarts(c);
    }
    const getPizzas = async ()=>{
        try{
            const PIZZA_ENDPOINT = import.meta.env.VITE_PIZZA_URL;
            const pizzas = await getApiCall(PIZZA_ENDPOINT);
            setLoading(false);
            setPizzas(pizzas["products"]);
        }
        catch(err){
            setErrors(err);
        }
    }
    return(
        <div> 
            <Header/>
            <CartContext.Provider value = {{carts:carts, addCart:addCart}}>
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        {loading?<p>Loading...</p>:<Products products={pizzas}/>}
                        {/* <Product/>
                        <Product/>
                        <Product/> */}
                    </div>
                </div>
                <div className="col-4">
                        <h3 className="alert alert-success">carts</h3>
                        <CartView/>
                </div>
            </div>
            </CartContext.Provider>
        </div>
    )
}