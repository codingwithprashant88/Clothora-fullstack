import express from 'express'
import { loginUser,signupUser, adminLogin } from '../controllers/userContoller.js'


const userRouter = express.Router();

userRouter.post('/signup', signupUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)

export default userRouter;