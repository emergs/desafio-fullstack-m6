import AppDataSource from "../../data-source";
import { v4 as uuid } from "uuid"
import { Contacts } from "../../entities/contacts.entity"
import { IContactRequest } from "../../interfaces/contacts.interface"
import { Customer } from "../../entities/customer.entity";
import { ICustomer, ICustomerDecoded } from "../../interfaces/customer.interface";

const createContactService = async ({ name, email, phone }: IContactRequest, customer: string) => {
  const customerId = AppDataSource.getRepository(Customer)
  const currentCustomer = await customerId.findOne({
    where: {
      id: customer
    },
    relations: {
      contacts: true
    }
  })

  console.log(currentCustomer)

  const contactRepository = AppDataSource.getRepository(Contacts)

  const contact = new Contacts()
  contact.id = uuid()
  contact.name = name
  contact.email = email
  contact.phone = phone
  contact.createdAt = new Date()
  contact.customer = currentCustomer?.id

  contactRepository.create(contact)
  await contactRepository.save(contact)

  return contact

}

export default createContactService;