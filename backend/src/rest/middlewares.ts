import { NextFunction, Request, Response } from 'express'

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  //@ts-ignore
  if (req.session.role === 'admin') {
    next()
  } else {
    res.status(401).send()
  }
}
