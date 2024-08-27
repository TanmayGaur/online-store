import axios from "axios";

export const orderService = async (email, paymentId, status, name,address, total) =>{
    const order = {email, paymentId, status, name, address, total};
    const URL = import.meta.env.VITE_ORDER_URL;
    const response = await axios.post(URL, order);
    console.log('order book ', response.data);
    return response.data;
}