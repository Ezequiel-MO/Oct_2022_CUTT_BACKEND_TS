import { Router } from 'express'
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem
} from '../controllers/restaurant'
import uploadS3 from '../middleware/s3Storage'
import { checkAuth } from '../middleware/session'

const router = Router()

router
  .route('/')
  .get(checkAuth, getItems)
  .post(checkAuth, uploadS3.array('imageContentUrl', 12), postItem)
router
  .route('/:id')
  .get(checkAuth, getItem)
  .patch(checkAuth, updateItem)
  .delete(checkAuth, deleteItem)

export { router }
