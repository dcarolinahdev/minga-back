import { Router } from "express"
import read from '../controllers/categories/read.js'

let categoriesRouter = Router()

categoriesRouter.get('/', read)

export default categoriesRouter
