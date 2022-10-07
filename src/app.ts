import express, { NextFunction } from 'express'
import cors from 'cors'
import { router } from './routes'
import AppError from './utils/appError'

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

app.all('*', (req, res, next: NextFunction) =>
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
)

export default app
