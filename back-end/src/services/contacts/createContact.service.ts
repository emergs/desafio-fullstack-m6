import AppDataSource from "../../data-source";
import { v4 as uuid } from "uuid"
import { Contacts } from "../../entities/contacts.entity"
import { IContactRequest } from "../../interfaces/contacts.interface"

const createContactService = async ({ name, email, phone }: IContactRequest) => {
  const contactRepository = AppDataSource.getRepository(Contacts)

  const contact = new Contacts()
  contact.id = uuid()
  contact.name = name
  contact.email = email
  contact.phone = phone

  contactRepository.create(contact)
  await contactRepository.save(contact)

  return contact

}

export default createContactService;