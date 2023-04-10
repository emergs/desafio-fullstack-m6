import Modal from "react-modal";
import { useContext, useEffect, useState } from "react";
import { CustomerContext } from "../../contexts/customer";
import { FormStyled } from "../Form/style"
import Header from "../Header";
import { ContactsContext, IContacts, IContactsRequest } from "../../contexts/contacts";
import { modalStyles } from "../../styles/global";
import { useForm } from "react-hook-form";
import { Button } from "../Button";

const CreateContact = () => {

  const { navigate } = useContext(CustomerContext)
  const { createContactModal, openCreateContactModal, createContactStorage } = useContext(ContactsContext)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IContacts>()

  useEffect(() => {
    reset()
  }, [openCreateContactModal])

  return (
    <Modal
      isOpen={createContactModal}
      onRequestClose={openCreateContactModal}
      style={modalStyles}
      contentLabel="Create Modal"
      ariaHideApp={false}

    >
      <FormStyled onSubmit={handleSubmit(createContactStorage)}>
        <div className="header-register">
          <Header>Criar novo contato</Header>
          <Button
            onClick={() => openCreateContactModal()}>Voltar
          </Button>
        </div>
        <div className="div-label-input">
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" placeholder="Name" {...register('name')} />

        </div>
        <div className="div-label-input">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" {...register('email')} />

        </div>
        <div className="div-label-input">
          <label htmlFor="phone">Telefone</label>
          <input id="phone" type="phone" placeholder="Telefone" {...register('phone')} />

        </div>
        <div className="div-label-input">
          <button type="submit" className="button-default">Criar</button>
        </div>
      </FormStyled>
    </Modal>
  )
}

export default CreateContact;