import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/appError';

const handleErrorMiddleware = (error: Error, req: Request, res: Response) => {
  console.log(error instanceof AppError)
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message
    })
  }
  console.log(error);

  return res.status(500).json({
    message: 'Internal Server Error'
  })
}
export default handleErrorMiddleware