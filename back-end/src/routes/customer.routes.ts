import { Router } from "express";
import { createCustomerController, deleteCustomerController, retriveCustomerController, updateCustomerController } from "../controllers/customers.controller";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import emailAlreadyRegisteredMiddleware from "../middlewares/emailAlreadyRegister.middleware";


const customersRoutes = Router();

customersRoutes.post('', emailAlreadyRegisteredMiddleware, createCustomerController);
customersRoutes.get('/profile', validateTokenMiddleware, retriveCustomerController);
customersRoutes.patch('/profile', validateTokenMiddleware, updateCustomerController);
customersRoutes.delete('/profile', validateTokenMiddleware, deleteCustomerController)


export default customersRoutes;