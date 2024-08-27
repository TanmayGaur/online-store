import { orderAdd } from "../services/order-service.js";

export const addOrder = async (req, res) =>{
    const order = req.body;
    const doc = await orderAdd(order);
    res.status(200).json({order:doc, message:'Order Booked'})
}