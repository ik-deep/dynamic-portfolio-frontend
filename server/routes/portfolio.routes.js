// /server/routes/portfolio.routes.js

import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { getPortfolio, updatePortfolio } from '../controllers/portfolio.controller.js';

const router = express.Router();

// Apply verifyToken middleware to all routes in this file
router.use(verifyToken); 

router.get('/', getPortfolio); 
router.put('/', updatePortfolio);

export default router;