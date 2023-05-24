import { Router } from "express"
import read from '../controllers/mangas/read.js'

let mangasRouter = Router()

mangasRouter.get('/', read)

export default mangasRouter
