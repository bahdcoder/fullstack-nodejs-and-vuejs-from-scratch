import User from '@models/User'

const login = (req, res) => {}

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
