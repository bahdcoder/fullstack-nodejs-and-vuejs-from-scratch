import { Router } from 'express'
import authRouter from './v1/auth'

const v1Router = new Router()

v1Router.use('api/v1/auth', authRouter)

export default v1Router
