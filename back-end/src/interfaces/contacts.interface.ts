import { ICustomer } from "./customer.interface"

export interface IContactRequest {
  name: string
  email: string
  phone: string
}

export interface IContact {
  id: string
  name: string
  email: string
  phone: string
  createdAt: Date,
  customer: ICustomer
}

export interface IContactUpdate {
  name?: string
  email?: string
  phone?: string
}