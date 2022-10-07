import { JwtPayload } from 'jsonwebtoken'
import { Request } from 'express'

export interface RequestExt extends Request {
  user?: JwtPayload | any /* { id: string } | string | undefined */
}
