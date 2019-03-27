import { Router } from 'express'
import registerValidator from '@validators/register'
import authController from '@controllers/v1/auth.controller'

const authRouter = new Router()

authRouter.post('/login', authController.login)

authRouter.post('/register', registerValidator, authController.register)

export default authRouter
