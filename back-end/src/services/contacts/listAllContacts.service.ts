import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const listContactsService = async () => {
  const contactsRepository = AppDataSource.getRepository(Contacts)
  const contacts = contactsRepository.find()

  if (!contacts) {
    throw new AppError('Contacts not found');

  }

  return contacts
}

export default listContactsService;