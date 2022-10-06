import { Request, Response } from 'express'
import { insertClient } from '../services/client'
import { handleHttp } from '../utils/error.handle'

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
}
const getItems = (req: Request, res: Response) => {
  res.send('get items')
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOGS')
  }
}
const updateItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_BLOG')
  }
}
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertClient(body)
    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_INSERTING_CLIENT')
  }
}
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_BLOG')
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }
