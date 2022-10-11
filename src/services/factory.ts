import { NextFunction, Request, Response } from 'express'
import { Model } from 'mongoose'
import AppError from '../utils/appError'
import catchAsync from '../utils/catchAsync'

const getOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const doc = await Model.findById(id)
    if (!doc) {
      return next(new AppError(`No document found with that ID`, 404))
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    })
  })

const getAll = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const response = await Model.find({})
    res.status(200).json({
      status: 'success',
      results: response.length,
      data: {
        data: response
      }
    })
  })

const updateOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const doc = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })
    if (!doc) {
      return next(new AppError(`No document found with that ID`, 404))
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    })
  })

const createOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const model = new Model({ ...req.body })
    if (req.files) {
      model.setImgUrl(req.files)
    }
    const doc = await model.save()

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    })
  })

const deleteOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const doc = await Model.findByIdAndDelete(id)
    if (!doc) {
      return next(new AppError(`No document found with that ID`, 404))
    }
    res.status(204).json({
      status: 'success',
      data: null
    })
  })

export { getAll, getOne, updateOne, createOne, deleteOne }
