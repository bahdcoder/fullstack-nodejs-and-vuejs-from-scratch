import { Router } from 'express'
import loginValidator from '@validators/login'
import registerValidator from '@validators/register'
import authController from '@controllers/v1/auth.controller'
import resetPasswordValidator from '@validators/reset-password'
import forgotPasswordValidator from '@validators/forgot-password'

const authRouter = new Router()

authRouter.post('/login', loginValidator, authController.login)

authRouter.post('/register', registerValidator, authController.register)

authRouter.post(
    '/passwords/email',
    forgotPasswordValidator,
    authController.forgotPassword
)

authRouter.post('/passwords/reset', resetPasswordValidator, authController.resetPassword)

export default authRouter
