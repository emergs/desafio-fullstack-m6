import { createContext, useState } from "react";
import { IChildren } from "..";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

interface ICustomerContext {
  customerLogin: (data: ICustomerLogin) => void,
}

export interface ICustomerLogin {
  email: string,
  password: string,
}

interface ICustomer {
  id: string,
  name: string,
  email: string,
  password: string,
  phone: string,
  createdAt: Date
}



export const CustomerContext = createContext<ICustomerContext>({} as ICustomerContext);

const CustomerProvider = ({ children }: IChildren) => {

  //states
  const [customer, setCustomer] = useState<ICustomer>({} as ICustomer)

  const navigate = useNavigate()

  const customerLogin = async (data: ICustomerLogin) => {
    function validateLogin() {
      toast.success('Login realizado com sucesso')
      navigate('../dashboard', { replace: true })
      setCustomer(request.data.customer)
      localStorage.setItem('@appDesafioFullStackM6TOKEN', JSON.stringify(request.data.token))
      localStorage.setItem('@appDesafioFullStackM6USERID', JSON.stringify(request.data.customer.id))
    }

    function doNotValidateLogin() {
      toast.error('Dados incorretos')
    }

    const request = await api.post('/login', data)
    request.status === 200 ? validateLogin() : doNotValidateLogin()
  }

  return (
    <CustomerContext.Provider value={{ customerLogin }}>
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider