import { Router } from 'express'
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem
} from '../controllers/client'

const router = Router()

router.route('/').get(getItems).post(postItem)
router.route('/:id').get(getItem).patch(updateItem).delete(deleteItem)

export { router }
