import { Response } from 'express'
import { RequestExt } from '../interfaces/req-ext'
import { handleHttp } from '../utils/error.handle'

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'ONLY PAX WITH AUTHORIZATION CAN SEE THIS / JWT',
      user: req.user
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS', e)
  }
}

export { getItems }
