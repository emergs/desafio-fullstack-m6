import AppDataSource from "../../data-source";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";
import { ICustomerUpdate } from "../../interfaces/customer.interface";
import { Customer } from "../../entities/customer.entity";

const updateCustomerService = async (id: string, user: ICustomerUpdate) => {
  const { name, email, password, phone } = user
  const customerRepository = AppDataSource.getRepository(Customer);
  const customerEdited = await customerRepository.findOneBy({ id })

  if (!customerEdited) {
    throw new AppError("Customer not found", 404)
  }

  await customerRepository.update(id, {
    name: name ? name : customerEdited.name,
    email: email ? email : customerEdited.email,
    phone: phone ? phone : customerEdited.phone,
    password: password ? await hash(password, 10) : customerEdited.password
  })

  const userReturned = await customerRepository.findOneBy({ id })

  // const userReturn = { 
  //   id: userEd?.id, 
  //   name: userEd?.name, isAdm: userEd?.isAdm, isActive: userEd?.isActive, createdAt: userEd?.createdAt, email: userEd?.email, updatedAt: userEd?.updatedAt, schedule: userEd?.schedule }

  return userReturned
}

export default updateCustomerService