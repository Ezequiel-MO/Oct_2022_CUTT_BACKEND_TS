import { NextFunction, Response } from 'express'
import { RequestExt } from '../interfaces/req-ext'
import { verifyToken } from '../utils/jwt.handle'

const checkAuth = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || ''
    const jwt = jwtByUser?.split(' ')[1] || null
    const isUser = verifyToken(`${jwt}`)
    if (!isUser) {
      res.status(401).send('UNAUTHORIZED')
    } else {
      req.user = isUser
      next()
    }
  } catch (e) {
    res.status(401).send('UNAUTHORIZED')
  }
}

export { checkAuth }
