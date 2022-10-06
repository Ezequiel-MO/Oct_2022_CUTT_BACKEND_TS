import { Request, Response } from 'express'
import { registerNewUser, loginUser } from '../services/auth'

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body)
  res.send(responseUser)
}

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body
  const responseUser = await loginUser({ email, password })
  if (responseUser === 'PASSWORD_INCORRECT') {
    res.status(403).send('PASSWORD_INCORRECT')
  } else if (responseUser === 'USER_NOT_FOUND') {
    res.status(404).send('USER_NOT_FOUND')
  } else {
    res.send(responseUser)
  }
}

export { registerCtrl, loginCtrl }
