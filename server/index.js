import Express from 'express'
import Mongoose from 'mongoose'
import config from './config'

Mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

const app = Express()

app.listen(3000, () => {
    console.log('server started succesfully.')
})
