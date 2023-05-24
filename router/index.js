import { Router } from "express"
import usersRouter from "./auth.js"
import authorsRouter from "./authors.js"
import mangasRouter from "./mangas.js"
import chaptersRouter from "./chapters.js"

let indexRouter = Router()

indexRouter.use('/auth', usersRouter)
indexRouter.use('/authors', authorsRouter)
indexRouter.use('/mangas', mangasRouter)
indexRouter.use('/chapters', chaptersRouter)

export default indexRouter