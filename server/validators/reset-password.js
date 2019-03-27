import * as Yup from 'yup'
import User from '@models/User'
import PasswordReset from '@models/PasswordReset'

const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(6)
        .required()
})

export default async (req, res, next) => {
    const { password, token } = req.body

    try {
        await ResetPasswordSchema.validate(req.body)

        const existingReset = await PasswordReset.findOne({ token })

        if (!existingReset) {
            throw new Yup.ValidationError(
                'Invalid reset token.',
                req.body,
                'password'
            )
        }

        const timeInMinutes = Math.ceil((new Date().getTime() - new Date(existingReset.createdAt).getTime()) / 60000)

        if (timeInMinutes > 5) {
            await PasswordReset.findOneAndDelete({ token })

            throw new Yup.ValidationError(
                'Reset token expired.',
                req.body,
                'password'
            )
        }

        const user = await User.findOne({ email: existingReset.email })

        req.user = user

        return next()
    } catch (error) {
        res.status(422).json({
            [error.path]: error.message
        })
    }
}
