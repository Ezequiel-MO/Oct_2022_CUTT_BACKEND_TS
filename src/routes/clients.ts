import { Router } from 'express'
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem
} from '../controllers/client'
import { checkAuth } from '../middleware/session'

const router = Router()

router.route('/').get(checkAuth, getItems).post(checkAuth, postItem)
router
  .route('/:id')
  .get(checkAuth, getItem)
  .patch(checkAuth, updateItem)
  .delete(checkAuth, deleteItem)

export { router }
