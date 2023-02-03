import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/appError';

const handleErrorMiddleware = (error: AppError, req: Request, res: Response) => {
  return res.status(error.statusCode).json({
    message: error.message
  })
}
export default handleErrorMiddleware