import { Router } from 'express'
import loginValidator from '@validators/login'
import registerValidator from '@validators/register'
import authController from '@controllers/v1/auth.controller'
import forgotPasswordValidator from '@validators/forgot-password'

const authRouter = new Router()

authRouter.post('/login', loginValidator, authController.login)

authRouter.post('/register', registerValidator, authController.register)

authRouter.post(
    '/passwords/email',
    forgotPasswordValidator,
    authController.forgotPassword
)

export default authRouter
