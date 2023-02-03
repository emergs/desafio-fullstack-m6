import { createContext, useEffect, useState } from "react";
import { IChildren } from "..";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

interface ICustomerContext {
  customerLogin: (data: ICustomerLogin) => void,
  deleteCustomerStorage: ()=>void,
  loadUser: ()=>void,
  updateCustomer: ()=>void,
  retriveProfile:()=>void,
  customer: ICustomer,
  loading: boolean,

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
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate()

  useEffect(()=>{

  const loadUser = async ()=>{
    const token = JSON.parse (localStorage.getItem('@appDesafioFullStackM6TOKEN') || '{}')
    if(token){
      
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const {data} = await api.get('/profile')
        setCustomer(data)
      } 
      catch (error) {
        console.error(error);
        localStorage.removeItem('@appDesafioFullStackM6TOKEN')
        localStorage.removeItem('@appDesafioFullStackM6USERID')
      }
    }
    setLoading(false)
  }

  loadUser()
  },[count])

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

  const deleteCustomerStorage = ()=>{
    navigate('../login', {replace:true})
    localStorage.removeItem('@appDesafioFullStackM6TOKEN')
    localStorage.removeItem('@appDesafioFullStackM6USERID')
  }

  const addCount = ()=>{
    setCount(count+1)
  }  

  const updateCustomer = async (data:ICustomerUpdate)=>{
    const token = JSON.parse(localStorage.getItem('@appDesafioFullStackM6TOKEN') || '{}')
      
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const {data} = await api.get('/profile')
      await api.patch(`/customer/profile`,data)
      setCount(count+1)
      toast.success('Dados editados com sucesso')
    } 
    catch (error) {
      console.error(error);
    }
  }

  const retriveProfile = async()=>{
    const token = JSON.parse(localStorage.getItem('@appDesafioFullStackM6TOKEN') || '{}')
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      await api.get(`/profile`)
      setCount(count+1)
    } 
    catch (error) {
      console.error(error);
    }
  }

  return (
    <CustomerContext.Provider value={{ customerLogin }}>
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider