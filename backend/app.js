import express from 'express'
import cors from 'cors';
import { createConnection } from './shared/db/connection.js';
import dotenv from 'dotenv';
import { productRoutes } from './modules/products/routes/product-route.js';
import { orderRoutes } from './modules/orders/routes/order-routes.js';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/', productRoutes);
app.use('/', orderRoutes);
const promise = createConnection();
promise.then(conInfo=>{
    app.listen(4444, err=>{
        if(err){
            console.log('Application Crash ', err);
        }
        else{
            console.log('Application Up and Running');
        }
    })
}).catch(err=>{
    console.log("Application can't up DB is Down");
})