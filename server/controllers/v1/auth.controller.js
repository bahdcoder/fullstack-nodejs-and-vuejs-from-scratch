import Bcrypt from 'bcryptjs'
import User from '@models/User'
import PasswordReset from '@models/PasswordReset'

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user) {
        if (user.comparePasswords(password)) {
            const token = user.generateToken()

            return res.json({
                user,
                token
            })
        }
    }

    return res.status(400).json({
        email: 'These credentials do not match our records.'
    })
}

const register = async (req, res) => {
    const { name, email, password } = req.body

    const user = await User.create({
        name,
        email,
        password
    })

    const token = user.generateToken()

    return res.status(201).json({ user, token })
}

const forgotPassword = async (req, res) => {
    await req.user.forgotPassword()

    return res.json({
        message: 'Password reset link sent.'
    })
}

const resetPassword = async (req, res) => {
    const { user } = req

    await User.findOneAndUpdate({
        email: user.email
    }, {
        password: Bcrypt.hashSync(req.body.password)
    })

    await PasswordReset.findOneAndDelete({
        email: user.email
    })

    return res.json({
        message: 'Password reset successfully.'
    })
}

const confirmEmail = async (req, res) => {
    const user = await User.findOneAndUpdate({
        email: req.user.email
    }, {
        emailConfirmCode: null,
        emailConfirmedAt: new Date()
    }, { new: true })

    const token = user.generateToken()

    return res.json({
        user,
        token
    })
}

const resendConfirmEmail = async (req, res) => {
    if (!req.user.emailConfirmedAt) {
        await req.user.sendEmailConfirmation()
    }

    return res.json({
        message: 'Email confirm sent.'
    })
}

export default {
    login,
    register,
    forgotPassword,
    resetPassword,
    confirmEmail,
    resendConfirmEmail
}
