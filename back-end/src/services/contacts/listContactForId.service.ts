import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const listContactForIdService = async (id: string) => {
  const contactsRepository = AppDataSource.getRepository(Contacts)
  const contact = contactsRepository.findOneBy({ id: id })

  if (!contact) {
    throw new AppError('Contacts not found');

  }

  return contact
}

export default listContactForIdService;