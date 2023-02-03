import { useContext, useState } from "react"
import { CustomerContext } from "../../contexts/customer"
import { contatos } from "../../database"
import { GroupList, GroupListDetails, List } from "./style"

const ContactList = () => {

  const { contactsCustomer } = useContext(CustomerContext)

  return (
    <GroupList>
      {
        contactsCustomer?.map((elem) => {
          return <List key={elem.id}>
            <span>{elem.name}</span>
            <div className="contact-details">
              <GroupListDetails>
                <li><span>Email</span><span>{elem.email}</span></li>
                <li><span>Telefone</span><span>{elem.phone}</span></li>
                <li><span>Data</span><span>{ }</span></li>
              </GroupListDetails>
            </div>
            <div className="buttons-group">
              <button>Editar</button><button>Excluir</button>
            </div>
          </List>
        })
      }
      {/* <li>Rute Rodrigues de Oliveira</li>
      <li>Arthur Vinicius Gonçalves de Oliveira</li>
      <li>Rute Rodrigues de Oliveira</li>
      <li>Arthur Vinicius Gonçalves de Oliveira</li>
      <li>Rute Rodrigues de Oliveira</li>
      <li>Arthur Vinicius Gonçalves de Oliveira</li> */}
    </GroupList>
  )
}

export default ContactList