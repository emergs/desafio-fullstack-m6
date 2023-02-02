import AppDataSource from "../../data-source";
import { v4 as uuid } from "uuid"
import { hash } from "bcrypt"
import { ICustomerRequest } from "../../interfaces/customer.interface";
import { Customer } from "../../entities/customer.entity";

const createCustomerService = async ({ name, email, password, phone }: ICustomerRequest) => {
  const customerRepository = AppDataSource.getRepository(Customer)

  const customer = new Customer()
  customer.id = uuid()
  customer.name = name
  customer.email = email
  customer.password = await hash(password, 10)
  customer.phone = phone

  customerRepository.create(customer)
  await customerRepository.save(customer)

  return { ...customer, password: undefined }

}

export default createCustomerService;