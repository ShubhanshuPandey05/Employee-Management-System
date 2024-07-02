import express from 'express';
import { getAllUserController } from '../controller/getAllUsersController.js';
import protectRoute from '../middleware/protectRoute.js';
import { signUp } from '../controller/authController.js';

const router = express.Router();
router.get("/",protectRoute,getAllUserController);
router.post("/addEmployee",protectRoute, signUp);
export default router;