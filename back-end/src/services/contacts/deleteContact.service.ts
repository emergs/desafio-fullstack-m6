import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts)
  const contact = await contactRepository.findOneBy({ id })

  if (!contact) {
    throw new AppError("Contact Not Found", 404);
  }

  await contactRepository.delete(contact)
}

export default deleteUserService;