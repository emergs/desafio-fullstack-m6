import AppDataSource from "../../data-source";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/appError";

const deleteCustomerService = async (id: string) => {
  const customerRepository = AppDataSource.getRepository(Customer)
  const customer = await customerRepository.findOneBy({ id })

  if (!customer) {
    throw new AppError("customer Not Found", 404);
  }

  customerRepository.delete(id)

  await customerRepository.save(customer)

}

export default deleteCustomerService;