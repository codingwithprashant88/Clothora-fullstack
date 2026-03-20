import express from 'express'
import { addToCart, updateToCart, getToCart } from '../controllers/cartController.js'
import authUser from '../middleware/cartAuth.js';

const cartRoute = express.Router();

cartRoute.post('/add', authUser ,addToCart);
cartRoute.post('/update', authUser ,updateToCart);
cartRoute.post('/get', authUser ,getToCart);


export default cartRoute;