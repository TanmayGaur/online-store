import { OrderModel } from "../models/order-schema.js"

export const orderAdd = async(order)=>{
    const doc = await OrderModel.create(order);
    return doc;
}