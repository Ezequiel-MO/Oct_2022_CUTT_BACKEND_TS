import { Router } from 'express'
import { getFile } from '../controllers/upload'
import multerMiddleware from '../middleware/file'
import { checkAuth } from '../middleware/session'

const router = Router()

router.post('/', checkAuth, multerMiddleware.single('myfile'), getFile)

export { router }
