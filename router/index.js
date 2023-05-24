import { Router } from "express"
import authorsRouter from "./authors.js"
import mangasRouter from "./mangas.js"

let indexRouter = Router()

indexRouter.use('/authors', authorsRouter)
indexRouter.use('/mangas', mangasRouter)

export default indexRouter