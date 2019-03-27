import * as Yup from 'yup'
import User from '@models/User'

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(6)
        .required()
})

export default async (req, res, next) => {
    const { name, email, password } = req.body

    try {
        await RegisterSchema.validate({ name, email, password })

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            throw new Yup.ValidationError(
                'This user already exists.',
                req.body,
                'email'
            )
        }

        return next()
    } catch (error) {
        return res.status(422).json({
            [error.path]: error.message
        })
    }
}
