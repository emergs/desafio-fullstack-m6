import AppDataSource from "../../data-source";
import { IContactUpdate } from "../../interfaces/contacts.interface"
import { Contacts } from "../../entities/contacts.entity"
import { AppError } from "../../errors/appError";

const updateUserService = async (id: string, contact: IContactUpdate) => {
  const { name, email, phone } = contact
  const contactRepository = AppDataSource.getRepository(Contacts);
  const contactEdited = await contactRepository.findOneBy({ id })

  if (!contactEdited) {
    throw new AppError("Contact not found", 404)
  }

  await contactRepository.update(id, {
    name: name ? name : contactEdited.name,
    email: email ? email : contactEdited.email,
    phone: phone ? phone : contactEdited.phone,
  })

  const userReturn = await contactRepository.findOneBy({ id })

  return userReturn
}

export default updateUserService