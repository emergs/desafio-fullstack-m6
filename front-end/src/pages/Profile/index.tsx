import { useContext, useEffect, useState } from "react"
import Content from "../../components/Content"
import { CustomerContext } from "../../contexts/customer"
import Modal from "react-modal"
import { FormStyled } from "../../components/Form/style"
import { modalStyles } from "../../styles/global"
import Header from "../../components/Header"
import { useForm } from "react-hook-form"
import { Button } from "../../components/Button"
import { ProfileStyle } from "../../components/Content/style"
import { ContactsContext } from "../../contexts/contacts"

const Profile = () => {

  const { navigate, customer, deleteCustomerStorage, updateCustomerStorage } = useContext(CustomerContext)
  const date = new Date(customer.createdAt)

  const { register, handleSubmit } = useForm()

  const [openModalCheckDelete, setOpenModalCheckDelete] = useState<boolean>(false)
  const [openModalUpdateCustomer, setOpenModalUpdateCustomer] = useState<boolean>(false)

  const checkDelete = () => {
    openModalCheckDelete ? setOpenModalCheckDelete(false) : setOpenModalCheckDelete(true)
  }

  const updateCustomer = () => {
    openModalUpdateCustomer ? setOpenModalUpdateCustomer(false) : setOpenModalUpdateCustomer(true)
  }

  const deleteProfile = () => {
    deleteCustomerStorage()
    checkDelete()
  }

  const updateCustomerAndCloseModal = (data: any) => {
    updateCustomerStorage(data)
    updateCustomer()
  }

  return (
    <Content>
      <ProfileStyle>
        <div className="div-btn-exit">
          <Button onClick={() => navigate('../dashboard', { replace: true })}>Voltar</Button>
        </div>
        <ul>
          <li><span>Nome:</span><span>{customer.name}</span></li>
          <li><span>Email:</span><span>{customer.email}</span></li>
          <li><span>Telefone:</span><span>{customer.phone}</span></li>
          <li><span>Data do Registro:</span><span>{`0${date.getDay()}/ 0${date.getMonth() + 1}/ ${date.getFullYear()}`}</span></li>
        </ul>
        <div className="div-btn-group">
          <Button onClick={() => updateCustomer()}>Editar</Button>
          <Button onClick={() => checkDelete()}>Deletar</Button>
        </div>
      </ProfileStyle>
      <Modal
        isOpen={openModalCheckDelete}
        onRequestClose={checkDelete}
        style={modalStyles}
        ariaHideApp={false}
      >
        <FormStyled>
          <Button onClick={() => checkDelete()}>Fechar</Button>
          <div>
            <h2>Tem certeza que deseja excluir seu perfil?</h2>
            <span>ATENÇÂO:Essa ação não pode ser desfeita</span>
          </div>
          <div>
            {/* chamar a função de excluir customer  */}
            <button onClick={() => deleteProfile()}>Sim</button>
            <button onClick={() => checkDelete()}>Não</button>
          </div>
        </FormStyled>
      </Modal>
      <Modal
        isOpen={openModalUpdateCustomer}
        onRequestClose={updateCustomer}
        style={modalStyles}
        ariaHideApp={false}
      >
        <FormStyled onSubmit={handleSubmit(updateCustomerAndCloseModal)}>
          <div className="header-register">
            <Header>Editar Perfil</Header>
            <span
              onClick={(e) => console.log('voltar')}>Voltar
            </span>
          </div>
          <div className="div-label-input">
            <input defaultValue={customer.name} {...register('name')} />
          </div>

          <div className="div-label-input">
            <input defaultValue={customer.phone} {...register('phone')} />
          </div>
          <div className="div-label-input">
            <button className="button-default" type="submit">Salvar</button>
          </div>
        </FormStyled>
      </Modal>
    </Content>
  )
}

export default Profile