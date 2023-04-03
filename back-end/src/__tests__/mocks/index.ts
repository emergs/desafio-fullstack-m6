import { IContactRequest } from "../../interfaces/contacts.interface";
import { ICustomer, ICustomerLogin, ICustomerRequest } from "../../interfaces/customer.interface";

export const mockedCustomer: ICustomerRequest = {
  name: "Alberto",
  email: "alberto@mail.com",
  phone: "41999778877",
  password: "1234"
}

export const mockedCustomerLogin: ICustomerLogin = {
  email: "alberto@mail.com",
  password: "1234"
}

export const mockedCustomerLoginUnregistered: ICustomerLogin = {
  email: "carlos@mail.com",
  password: "1234"
}

export const mockedContact: IContactRequest = {
  name: "Fernanda",
  email: "fernanda@mail.com",
  phone: "4391876542"
}