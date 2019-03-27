import { Router } from 'express'
import authMiddleware from '@middleware/auth'
import loginValidator from '@validators/login'
import registerValidator from '@validators/register'
import authController from '@controllers/v1/auth.controller'
import emailConfirmValidator from '@validators/email-confirm'
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

authRouter.post('/emails/confirm', emailConfirmValidator, authController.confirmEmail)

authRouter.post('/emails/resend', authMiddleware, authController.resendConfirmEmail)

export default authRouter
