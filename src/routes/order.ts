import { Router } from 'express'
import { getItems } from '../controllers/orders'
import { checkAuth } from '../middleware/session'

const router = Router()

router.get('/', checkAuth, getItems)

export { router }
