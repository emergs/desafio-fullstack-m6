import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IChildren } from "..";
import api from "../../services/api";
import { CustomerContext } from "../customer";

interface IContactsContext {
  createContactStorage: (data: IContactsRequest) => void,
  deleteContactStorage: (id: string) => void,
  //getIdContact: (id: string) => void,
  openCreateContactModal: () => void,
  openUpdateContactModal: () => void,
  updateContactStorage: (data: any, id: string) => void,
  contactRecovered: IContacts
  createContactModal: boolean,
  updateContactModal: boolean,
  updateContact: any
}

export interface IContacts {
  id: string,
  name: string,
  email: string,
  phone: string,
  createdAt: Date
}

export interface IContactsRequest {
  name: string,
  email: string,
  phone: string
}

export const ContactsContext = createContext<IContactsContext>({} as IContactsContext);

const ContactsProvider = ({ children }: IChildren) => {

  const { addCount, count } = useContext(CustomerContext)

  const [createContactModal, setCreateContactModal] = useState<boolean>(false)
  const [updateContactModal, setUpdateContactModal] = useState<boolean>(false)
  const [idContact, setIdContact] = useState<string>('')
  const [contactRecovered, setContactRecovered] = useState<IContacts>({} as IContacts)
  const token = JSON.parse(localStorage.getItem('@appDesafioFullStackM6TOKEN') || '{}')

  const updateContact = (elem: any) => {
    setContactRecovered(elem)
    openUpdateContactModal()
  }


  const createContactStorage = async (data: IContactsRequest) => {
    try {
      openCreateContactModal()
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      await api.post(`/contacts`, data)
      addCount()
      toast.success('Contato criado com sucesso!!')
    } catch (error) {
      toast.error('Contato não criado!!')
    }
  }

  const deleteContactStorage = async (id: string) => {
    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      await api.delete(`/contacts/${id}`)
      toast.success('Contato deletado com sucesso!!')
      addCount()
    } catch (error) {
      toast.error('Contato não deletado!!')
    }
  }

  // const retriveContactStorage = async (id: string) => {
  //   try {
  //     api.defaults.headers.common.Authorization = `Bearer ${token}`
  //     const data = await api.get(`/contacts/${id}`)
  //     setContactRecovered(data.data)
  //     addCount()
  //   } catch (error) {
  //     toast.error('Contato não encontrado!!')
  //   }
  // }

  const updateContactStorage = async (data: any, id: string) => {
    try {
      //console.log(datas)
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      await api.patch(`/contacts/${id}`, data)
        .then((response) => console.log(response.data))
      addCount()
      toast.success('Contato atualizado com sucesso!!')
    } catch (error) {
      toast.error('Contato não atualizado!!')
    }
  }

  const openCreateContactModal = () => {
    createContactModal ? setCreateContactModal(false) : setCreateContactModal(true)
  }

  const openUpdateContactModal = () => {
    updateContactModal ? setUpdateContactModal(false) : setUpdateContactModal(true)
  }

  return (
    <ContactsContext.Provider value={{ createContactModal, openCreateContactModal, deleteContactStorage, updateContactStorage, openUpdateContactModal, updateContactModal, createContactStorage, contactRecovered, updateContact }}>
      {children}
    </ContactsContext.Provider>
  )
}

export default ContactsProvider