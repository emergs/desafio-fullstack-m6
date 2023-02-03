import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer"
import createContactsService from "../services/contacts/createContact.service"
import listContactService from "../services/contacts/listAllContacts.service"
import updateContactService from "../services/contacts/updateContact.service"
import deletContactService from "../services/contacts/deleteContact.service"

const createContactController = async (req: Request, res: Response) => {
  const newContact = req.body
  const customer = req.customer.id
  const contact = await createContactsService(newContact, customer)
  return res.status(201).json(instanceToPlain(contact))
}

const listContactsController = async (req: Request, res: Response) => {
  const contacts = await listContactService()
  return res.status(200).json(instanceToPlain(contacts))
}

const updateContactController = async (req: Request, res: Response) => {
  const id: string = req.params.id
  const contact = req.body
  const contactEdit = await updateContactService(id, contact)
  return res.status(200).json(instanceToPlain(contactEdit))
}

const deleteContactController = async (req: Request, res: Response) => {
  const id = req.params.id
  const contact = await deletContactService(id)
  return res.status(204).send()
}



export { createContactController, listContactsController, updateContactController, deleteContactController }