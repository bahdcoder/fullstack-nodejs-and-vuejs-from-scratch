import mongoose from 'mongoose'

const PasswordResetSchema = new mongoose.Schema({
    email: String,
    token: String,
    createdAt: Date
})

export default mongoose.model('PasswordReset', PasswordResetSchema)
