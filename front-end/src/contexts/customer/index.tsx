import { createContext, useEffect, useState } from "react";
import { IChildren } from "..";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { IContacts } from "../contacts";

interface ICustomerContext {
  addCount: () => void,
  auth: boolean,
  contactsCustomer: IContacts[],
  count: number
  createCustomerModal: boolean,
  createCustomerStorage: (data: ICustomer) => void,
  customer: ICustomer,
  customerLogin: (data: ICustomerLogin) => void,
  deleteCustomerStorage: () => void,
  loading: boolean,
  loadUser: () => void,
  navigate: any,
  openCreateCustomerModal: () => void,
  retriveProfile: () => void,
  updateCustomerStorage: (data: any) => void,
}

export interface ICustomerLogin {
  email: string,
  password: string,
}

export interface ICustomer {
  id: string,
  name: string,
  email: string,
  password: string,
  phone: string,
  createdAt: Date
}

export interface ICustomerUpdate {
  name: string,
  phone: string,
}

export interface ICustomerRegister {
  name: string,
  email: string,
  password: string,
  phone: string,
}



export const CustomerContext = createContext<ICustomerContext>({} as ICustomerContext);

const CustomerProvider = ({ children }: IChildren) => {

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
    try {
      const request = await api.post('/login', data)
      localStorage.setItem('@appDesafioFullStackM6TOKEN', JSON.stringify(request.data.token))
      toast.success('Login realizado com sucesso')
      navigate('/dashboard', { replace: true })
    }
    catch (error) {
      toast.error('Dados incorretos')
    }
  }

  const createCustomerStorage = async (data: ICustomer) => {
    try {
      const req = await api.post('/customers', data)
      setCustomer(req.data)
      setCount(count + 1)
      toast.success('Usuário criado com sucesso!')
      navigate('/login', { replace: true })
    }
    catch (error) {
      console.error(error);
    }
  }

  const deleteCustomerStorage = async () => {
    const token = JSON.parse(localStorage.getItem('@appDesafioFullStackM6TOKEN') || '{}')
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      await api.delete(`/customers`)
      setCount(count + 1)
      toast.success('Usuário deletado com sucesso')
      navigate('../login', { replace: true })
      localStorage.removeItem('@appDesafioFullStackM6TOKEN')
      localStorage.removeItem('@appDesafioFullStackM6USERID')
    }
    catch (error) {
      console.log(error)
    }
  }
  const addCount = () => {
    setCount(count + 1)
  }

  const updateCustomerStorage = async (data: any) => {
    const token = JSON.parse(localStorage.getItem('@appDesafioFullStackM6TOKEN') || '{}')
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      await api.patch(`/customers`, data)
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
    <CustomerContext.Provider value={{ customerLogin, customer, contactsCustomer, navigate, addCount, count, updateCustomerStorage, deleteCustomerStorage, createCustomerStorage, loading }}>
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider