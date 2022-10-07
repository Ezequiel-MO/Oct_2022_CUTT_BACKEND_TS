import { Request, Response } from 'express'
import {
  insertCountry,
  getCountries,
  getCountry,
  updateCountry,
  deleteCountry
} from '../services/country'
import { handleHttp } from '../utils/error.handle'

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await getCountry(id)
    const data = response ? response : 'NOT_FOUND'
    res.status(200).json({
      status: response ? 'success' : 'fail',
      data: { data }
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_COUNTRY', e)
  }
}
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCountries()
    res.status(200).json({
      status: 'success',
      results: response.length,
      data: {
        data: response
      }
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_COUNTRIES', e)
  }
}
const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await updateCountry(id, body)
    res.status(200).json({
      status: 'success',
      data: {
        data: response
      }
    })
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_COUNTRY', e)
  }
}
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCountry(body)
    res.status(201).json({
      status: 'success',
      data: {
        data: responseItem
      }
    })
  } catch (e) {
    handleHttp(res, 'ERROR_POST_COUNTRY', e)
  }
}
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    await deleteCountry(id)
    res.status(204).json({
      status: 'success',
      data: null
    })
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_COUNTRY', e)
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }
