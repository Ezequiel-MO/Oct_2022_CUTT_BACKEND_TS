import { NextFunction, Request, Response } from 'express'
import { Model } from 'mongoose'
import { handleHttp } from '../utils/error.handle'

const getOne = (Model: Model<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
      const doc = await Model.findById(id)
      if (!doc) {
        return res.status(404).json({
          status: 'fail',
          message: 'No document found with that ID'
        })
      }
      res.status(200).json({
        status: 'success',
        data: {
          data: doc
        }
      })
    } catch (e) {
      handleHttp(res, 'ERROR_GET_ITEM', e)
    }
  }
}

const getAll = (Model: Model<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await Model.find({})
      res.status(200).json({
        status: 'success',
        results: response.length,
        data: {
          data: response
        }
      })
    } catch (e) {
      handleHttp(res, 'ERROR_GET_ITEMS', e)
    }
  }
}

const updateOne = (Model: Model<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
      const doc = await Model.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
      })
      if (!doc) {
        return res.status(404).json({
          status: 'fail',
          message: 'No document found with that ID'
        })
      }
      res.status(200).json({
        status: 'success',
        data: {
          data: doc
        }
      })
    } catch (e) {
      handleHttp(res, 'ERROR_UPDATE_ITEM', e)
    }
  }
}

const createOne = (Model: Model<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const doc = await Model.create(req.body)
      res.status(201).json({
        status: 'success',
        data: {
          data: doc
        }
      })
    } catch (e) {
      handleHttp(res, 'ERROR_CREATE_ITEM', e)
    }
  }
}

const deleteOne = (Model: Model<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
      const doc = await Model.findByIdAndDelete(id)
      if (!doc) {
        return res.status(404).json({
          status: 'fail',
          message: 'No document found with that ID'
        })
      }
      res.status(204).json({
        status: 'success',
        data: null
      })
    } catch (e) {
      handleHttp(res, 'ERROR_DELETE_ITEM', e)
    }
  }
}

export { getAll, getOne, updateOne, createOne, deleteOne }
