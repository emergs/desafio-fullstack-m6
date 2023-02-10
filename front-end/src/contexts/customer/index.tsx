import { createContext, useEffect, useState } from "react";
import { IChildren } from "..";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { IContacts } from "../contacts";

interface ICustomerContext {
  customerLogin: (data: ICustomerLogin) => void,
  deleteCustomerStorage: () => void,
  loadUser: () => void,
  updateCustomer: () => void,
  retriveProfile: () => void,
  customer: ICustomer,
  loading: boolean,
  contactsCustomer: IContacts[],
  createCustomerModal: boolean,
  openCreateCustomerModal: () => void,
  navigate: any,
  addCount: () => void,
  count: number
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

interface ICustomerUpdate {
  name: string,
  email: string,
  password: string,
  phone: string,
}



export const CustomerContext = createContext<ICustomerContext>({} as ICustomerContext);

const CustomerProvider = ({ children }: IChildren) => {

  //states
  const [customer, setCustomer] = useState<ICustomer>({} as ICustomer)
  const [contactsCustomer, setContactsCustomer] = useState<IContacts[]>([])
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate()

  useEffect(() => {

    const loadCustomer = async () => {
      const token = JSON.parse(localStorage.getItem('@appDesafioFullStackM6TOKEN') || '{}')
      if (token) {

        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`
          const { data } = await api.get('/customers/profile')
          setContactsCustomer(data[0].contacts)
          setCustomer(data[0])
        }
        catch (error) {
          console.error(error);
          localStorage.removeItem('@appDesafioFullStackM6TOKEN')
          localStorage.removeItem('@appDesafioFullStackM6USERID')
        }
      }
      setLoading(false)
    }

    loadCustomer()
  }, [count])

  const customerLogin = async (data: ICustomerLogin) => {
    function validateLogin() {
      toast.success('Login realizado com sucesso')
      navigate('../dashboard', { replace: true })
      setCustomer(request.data.customer.data)
      setContactsCustomer(request.data.customer.data.contacts)
      localStorage.setItem('@appDesafioFullStackM6TOKEN', JSON.stringify(request.data.customer.token))
      localStorage.setItem('@appDesafioFullStackM6USERID', JSON.stringify(request.data.customer.data.id))
    }

    function doNotValidateLogin() {
      toast.error('Dados incorretos')
    }

    const request = await api.post('/login', data)
    console.log(request.data)
    request.status === 200 ? validateLogin() : doNotValidateLogin()
  }

  const deleteCustomerStorage = () => {
    navigate('../login', { replace: true })
    localStorage.removeItem('@appDesafioFullStackM6TOKEN')
    localStorage.removeItem('@appDesafioFullStackM6USERID')
  }

  const addCount = () => {
    setCount(count + 1)
  }

  const updateCustomer = async (data: ICustomerUpdate) => {
    const token = JSON.parse(localStorage.getItem('@appDesafioFullStackM6TOKEN') || '{}')

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const { data } = await api.get('/profile')
      await api.patch(`/customer/profile`, data)
      setCount(count + 1)
      toast.success('Dados editados com sucesso')
    }
    catch (error) {
      console.error(error);
    }
  }

  const retriveProfile = async () => {
    const token = JSON.parse(localStorage.getItem('@appDesafioFullStackM6TOKEN') || '{}')
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      await api.get(`/profile`)
      setCount(count + 1)
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <CustomerContext.Provider value={{ customerLogin, customer, contactsCustomer, navigate, addCount, count }}>
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider