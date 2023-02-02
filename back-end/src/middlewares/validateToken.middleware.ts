import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"
import { AppError } from "../errors/appError";

const validateTokenMiddleware = async (req: Request, res: Response, next: Function) => {
  let token = req.headers.authorization
  console.log(token)

  if (!token) {
    throw new AppError('Invalid Token', 401);
  }

  else {
    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
      if (error) {
        throw new AppError('Unauthorized - Invalid Token', 401);
      }

      req.customer = {
        id: decoded.sub,
        email: decoded.email,
        phone: decoded.phone,
      }

      return next()
    })
  }
}

export default validateTokenMiddleware;