import { Request, Response } from 'express'
import {
  insertClient,
  getClients,
  updateClient,
  getClient,
  deleteClient
} from '../services/client'
import { handleHttp } from '../utils/error.handle'

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await getClient(id)
    const data = response ? response : 'NOT_FOUND'
    res.status(200).json({
      status: response ? 'success' : 'fail',
      data: { data }
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_CLIENT', e)
  }
}
const getItems = async (req: Request, res: Response) => {
  const response = await getClients()
  res.status(200).json({
    status: 'success',
    results: response.length,
    data: {
      data: response
    }
  })
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_CLIENTS', e)
  }
}
const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await updateClient(id, body)
    res.status(200).json({
      status: 'success',
      data: {
        data: response
      }
    })
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_CLIENT', e)
  }
}
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertClient(body)
    res.status(201).json({
      status: 'success',
      data: {
        data: responseItem
      }
    })
  } catch (e) {
    handleHttp(res, 'ERROR_INSERTING_CLIENT', e)
  }
}
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await deleteClient(id)
    res.status(204).json({
      status: 'success',
      data: null
    })
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_CLIENT', e)
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }
