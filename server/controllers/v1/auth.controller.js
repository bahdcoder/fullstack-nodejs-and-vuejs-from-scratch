import User from '@models/User'

const login = (req, res) => {}

const register = async (req, res) => {
    const { name, email, password } = req.body

    const user = await User.create({
        name,
        email,
        password
    })

    return res.status(201).json({ user })
}

export default {
    login,
    register
}
