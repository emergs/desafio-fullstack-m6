import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal"
import { ContactsContext, IContactsRequest } from "../../contexts/contacts";
import { CustomerContext } from "../../contexts/customer";
import { modalStyles } from "../../styles/global";
import { FormStyled } from "../Form/style";
import Header from "../Header";

const UpdateContact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IContactsRequest>();

  const { updateContactModal, openUpdateContactModal, contactRecovered, updateContactStorage } = useContext(ContactsContext)

  const onSubmit = (data: IContactsRequest) => {
    console.log(data);
    console.log(contactRecovered.id)
    updateContactStorage(data, contactRecovered.id)

  }

  return (
    <Modal
      isOpen={updateContactModal}
      onRequestClose={openUpdateContactModal}
      style={modalStyles}
      ariaHideApp={false}
    >

      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <div className="header-register">
          <Header>Editar Contato</Header>
          <span
            onClick={(e) => console.log('voltar')}>Voltar
          </span>
        </div>
        <div className="div-label-input">
          <input defaultValue={contactRecovered?.name} {...register("name",)} />
          {errors.name && <span>This field is required</span>}
        </div>

        <div className="div-label-input">
          <input defaultValue={contactRecovered?.email} {...register("email",)} />
          {errors.email && <span>This field is required</span>}
        </div>

        <div className="div-label-input">
          <input defaultValue={contactRecovered?.phone} {...register("phone",)} />
          {errors.phone && <span>This field is required</span>}
        </div>
        <div className="div-label-input">
          <button className="button-default">Salvar</button>
        </div>
      </FormStyled>
    </Modal>
  );
}

export default UpdateContact