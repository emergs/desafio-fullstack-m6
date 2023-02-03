import { IContact } from "./contacts.interface"

export interface ICustomerRequest {
  name: string
  email: string
  phone: string
  password: string
}

export interface ICustomer {
  id: string
  name: string
  email: string
  phone: string
  password: string
  createdAt: Date,
  isActive: boolean,
  contacts: IContact
}

export interface ICustomerDecoded {
  id: string
  email: string
  phone: string
}


export interface ICustomerLogin {
  email: string
  password: string
}

export interface ICustomerUpdate {
  name?: string
  email?: string
  phone?: string
  password?: string
}