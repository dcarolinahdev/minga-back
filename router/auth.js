import { Router } from "express"
import read from '../controllers/auth/read.js'

let usersRouter = Router()

usersRouter.get('/', read)

export default usersRouter
