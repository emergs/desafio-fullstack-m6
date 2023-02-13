import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import ContactList from "../../components/ContactList"
import Content from "../../components/Content"
import CreateContact from "../../components/CreateContact"
import Header from "../../components/Header"
import InfoProfile from "../../components/InfoProfile"
import UpdateContact from "../../components/UpdateContact"
import { ContactsContext } from "../../contexts/contacts"
import { CustomerContext } from "../../contexts/customer"
import { ContentDashboard, DashboardStyle } from "./style"
import Modal from "react-modal"
import { Button } from "../../components/Button"

const DashBoard = () => {

  const { openCreateContactModal } = useContext(ContactsContext)
  const { customer, loading } = useContext(CustomerContext)

  const navigate = useNavigate()

  const exitApp = () => {
    navigate('/login', { replace: true })
    localStorage.removeItem('@appDesafioFullStackM6TOKEN')
    localStorage.removeItem('@appDesafioFullStackM6USERID')
  }

  if (loading) return <h1>Carregando...</h1>

  return (
    customer ?
      <ContentDashboard>
        <div className="settings-profile">
          <Button onClick={() => navigate('../profile', { replace: true })}>Perfil</Button>
          <Button onClick={() => exitApp()}>Sair</Button>
        </div>
        <DashboardStyle>
          <Header>MY APP</Header>
          <InfoProfile />
          <div>
            <h2>Lista de Contatos</h2>
            <button onClick={() => openCreateContactModal()}>+</button>
          </div>
          <ContactList />
        </DashboardStyle>
        <CreateContact />
        <UpdateContact />
      </ContentDashboard>
      :
      <Navigate to='/login' replace />
  )
}

export default DashBoard