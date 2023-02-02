import "reflect-metadata"
import "express-async-errors"
import express from "express"
import handleErrorMiddleware from "./middlewares/handleError.middleware"
import loginRoutes from "./routes/login.routes"
import customersRoutes from "./routes/customer.routes"
import contactsRoutes from "./routes/contacts.routes"

const app = express()
app.use(express.json())
app.use('/customers', customersRoutes)
app.use('/login', loginRoutes)
app.use('/contacts', contactsRoutes)

app.use(handleErrorMiddleware)
export default app
