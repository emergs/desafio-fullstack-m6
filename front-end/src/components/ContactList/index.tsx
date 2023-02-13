import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { boolean } from "yup"
import { ContactsContext } from "../../contexts/contacts"
import { CustomerContext } from "../../contexts/customer"
import { GroupList, GroupListDetails, List } from "./style"

const ContactList = () => {

  const { contactsCustomer, customer } = useContext(CustomerContext)
  const { deleteContactStorage, updateContact } = useContext(ContactsContext)


  return (
    <GroupList>
      {
        contactsCustomer?.map((elem) => {
          const date = new Date(elem.createdAt)
          return <List key={elem.id}>
            <span>{elem.name}</span>
            <div className="contact-details">
              <GroupListDetails>
                <li><span>Email</span><span>{elem.email}</span></li>
                <li><span>Telefone</span><span>{elem.phone}</span></li>
                <li><span>Data</span><span>{`${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span></li>
              </GroupListDetails>
            </div>
            <div className="buttons-group">
              <button onClick={() => updateContact(elem)}>Editar</button>
              <button onClick={() => deleteContactStorage(elem.id)}>Excluir</button>
            </div>
          </List>
        })
      }
    </GroupList>
  )
}

export default ContactList