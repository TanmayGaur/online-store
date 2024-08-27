import express from 'express';
import { addOrder } from '../controllers/order-controller.js';
export const orderRoutes = express.Router();
orderRoutes.post('/order-book', addOrder);