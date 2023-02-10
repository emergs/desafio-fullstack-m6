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

const DashBoard = () => {

  const { openCreateContactModal } = useContext(ContactsContext)
  const { customer, contactsCustomer } = useContext(CustomerContext)

  const navigate = useNavigate()

  return (
    customer ?
      <ContentDashboard>
        <span className="exit" onClick={() => navigate('../login', { replace: true })}>Sair</span>
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