import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer"
import createCustomerService from "../services/customers/createCustomer.service"
import retriveCustomerService from "../services/customers/retriveCustomer.service"
import updateCustomerService from "../services/customers/updateCustomer.service"
import deleteCustomerService from "../services/customers/deleteCustomer.service"

const createCustomerController = async (req: Request, res: Response) => {
  const newCustomer = req.body
  const customer = await createCustomerService(newCustomer)
  return res.status(201).json(instanceToPlain(customer))
}

const retriveCustomerController = async (req: Request, res: Response) => {
  const id: string = req.params.id
  const customer = await retriveCustomerService(id)
  return res.status(200).json(instanceToPlain(customer))
}

const updateCustomerController = async (req: Request, res: Response) => {
  console.log(req.customer);

  const id: string = req.params.id
  const customer = req.body
  const customerEdit = await updateCustomerService(id, customer)

  return res.status(200).json(instanceToPlain(customerEdit))
}

const deleteCustomerController = async (req: Request, res: Response) => {
  const id = req.params.id
  const customer = await deleteCustomerService(id)
  return res.status(204).send()
}



export { createCustomerController, retriveCustomerController, updateCustomerController, deleteCustomerController }