import express from 'express';
import { addProduct, viewAll } from '../controllers/product-controller.js';
export const productRoutes = express.Router();
productRoutes.get('/view-products',viewAll);
productRoutes.post('/add-product',addProduct);
// app.get('/update-products',(request, response)=>{
//     response.send('Products');
// })
// app.get('/search-product',(request, response)=>{
//     response.send('Products');
// })