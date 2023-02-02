import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Customer } from "../entities/customer.entity";
import { AppError } from "../errors/appError";

const emailAlreadyRegisteredMiddleware = async (req: Request, res: Response, next: Function) => {
  const { email } = req.body;

  const customerRepository = AppDataSource.getRepository(Customer)
  const data = await customerRepository.find()

  const customer = data.find(customer => customer.email === email)
  console.log(customer);

  if (customer) {
    throw new AppError('Email already exists', 400)
  }

  next()
}

export default emailAlreadyRegisteredMiddleware;