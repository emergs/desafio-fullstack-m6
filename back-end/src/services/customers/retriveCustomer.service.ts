import AppDataSource from "../../data-source";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/appError";

const retriveCustomerService = async (id: string) => {
  const customerRepository = AppDataSource.getRepository(Customer)
  const customer = await customerRepository.find({
    where: {
      id: id
    },
    relations: {
      contacts: true
    }
  })


  if (!customer) {
    throw new AppError("customer Not Found", 404);
  }

  return customer

}

export default retriveCustomerService;