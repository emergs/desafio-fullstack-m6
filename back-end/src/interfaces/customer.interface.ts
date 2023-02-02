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
  date: Date
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