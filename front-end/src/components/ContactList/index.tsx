import { useState } from "react"
import { contatos } from "../../database"
import { GroupList, GroupListDetails, List } from "./style"

const ContactList = () => {

  const showContact = (id: string) => {
    const getDetails = contatos.filter(data => data.cpf === id)
    console.log(getDetails);
  }

  return (
    <GroupList>
      {
        contatos?.map((elem, index) => {
          return <List key={index}>
            <span onClick={(e) => showContact(e.currentTarget.id)} id={elem.cpf}>{elem.nome}</span>
            <div className="contact-details">
              <GroupListDetails>
                <li><span>Email</span><span>{elem.email}</span></li>
                <li><span>Telefone</span><span>{elem.telefone_fixo}</span></li>
                <li><span>Data</span><span>{elem.data_nasc}</span></li>
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