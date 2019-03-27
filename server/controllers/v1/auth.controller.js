import User from '@models/User'

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

export default {
    login,
    register
}
