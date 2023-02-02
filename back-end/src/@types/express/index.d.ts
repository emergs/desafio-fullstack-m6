import * as express from "express"

declare global {
  namespace Express {
    interface Request {
      customer: {
        id: string
        email: string
        phone: string
      }
    }
  }
}
