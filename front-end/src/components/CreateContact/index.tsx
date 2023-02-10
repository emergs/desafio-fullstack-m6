import Modal from "react-modal";
import { useContext, useState } from "react";
import { CustomerContext } from "../../contexts/customer";
import { FormStyled } from "../Form/style"
import Header from "../Header";
import { ContactsContext, IContactsRequest } from "../../contexts/contacts";
import { modalStyles } from "../../styles/global";

const CreateContact = () => {

  const { navigate } = useContext(CustomerContext)
  const { createContactModal, openCreateContactModal, createContactStorage } = useContext(ContactsContext)

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')


  return (
    <Modal
      isOpen={createContactModal}
      onRequestClose={openCreateContactModal}
      style={modalStyles}
      contentLabel="Create Modal"
      ariaHideApp={false}

    >
      <FormStyled >
        <div className="header-register">
          <Header>Criar novo contato</Header>
          <button
            onClick={() => navigate('../dashboard', { replace: true })}>Voltar
          </button>
        </div>
        <div className="div-label-input">
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

        </div>
        <div className="div-label-input">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>
        <div className="div-label-input">
          <label htmlFor="phone">Telefone</label>
          <input id="phone" type="phone" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />

        </div>
        <div className="div-label-input">
          <button onClick={(e) => createContactStorage({ name, email, phone })} className="button-default">Criar</button>
        </div>
      </FormStyled>
    </Modal>
  )
}

export default CreateContact;