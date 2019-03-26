import dotenv from 'dotenv'

dotenv.config()

export default {
    databaseUrl:
        process.env.DATABASE_URL || 'mongodb://localhost:27017/mevnmongo'
}
