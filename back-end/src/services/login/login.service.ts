import AppDataSource from "../../data-source"
import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { AppError } from "../../errors/appError";
import { ICustomerLogin } from "../../interfaces/customer.interface"
import { Customer } from "../../entities/customer.entity"

const loginService = async ({ email, password }: ICustomerLogin) => {

  const customerRepository = AppDataSource.getRepository(Customer)
  const customer = await customerRepository.findOne({
    where: {
      email: email
    },
    relations: {
      contacts: true
    }
  })

  if (!customer) {
    throw new AppError('Unregistered user', 403)
  }

  const passwordMatch = await compare(password, customer.password)

  if (!passwordMatch) {
    throw new AppError('Invalid customer or password', 403)
  }

  const token = jwt.sign(
    {
      email: customer.email,
      phone: customer.phone,
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: '20m',
      subject: customer.id
    }
  )
  return token
}

export default loginService;