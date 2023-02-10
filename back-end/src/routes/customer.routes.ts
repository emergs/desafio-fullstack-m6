import { Router } from "express";
import { createCustomerController, deleteCustomerController, retriveCustomerController, updateCustomerController } from "../controllers/customers.controller";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import emailAlreadyRegisteredMiddleware from "../middlewares/emailAlreadyRegister.middleware";


const customersRoutes = Router();

customersRoutes.post('', emailAlreadyRegisteredMiddleware, createCustomerController);
customersRoutes.get('/profile', validateTokenMiddleware, retriveCustomerController);
customersRoutes.patch('/:id', validateTokenMiddleware, updateCustomerController);
customersRoutes.delete('/:id', validateTokenMiddleware, deleteCustomerController)


export default customersRoutes;