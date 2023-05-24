import { Router } from "express"
import authorsRouter from "./authors.js"

let indexRouter = Router()

indexRouter.use('/authors', authorsRouter)

export default indexRouter