import { Router } from "express";
import { createContactController, listContactsController, updateContactController, deleteContactController, listContactForIdController } from "../controllers/contacts.controller";
import validateTokenMiddleware from "../middlewares/validateToken.middleware"
import emailAlreadyRegisterMiddleware from "../middlewares/emailAlreadyRegister.middleware"

const contactsRoutes = Router();

contactsRoutes.post('', validateTokenMiddleware, emailAlreadyRegisterMiddleware, createContactController);
contactsRoutes.get('', validateTokenMiddleware, listContactsController);
contactsRoutes.get('/:id', validateTokenMiddleware, listContactForIdController);
contactsRoutes.patch('/:id', validateTokenMiddleware, updateContactController);
contactsRoutes.delete('/:id', validateTokenMiddleware, deleteContactController)


export default contactsRoutes;