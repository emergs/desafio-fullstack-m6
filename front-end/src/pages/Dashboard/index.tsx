import { useNavigate } from "react-router-dom"
import ContactList from "../../components/ContactList"
import Content from "../../components/Content"
import Header from "../../components/Header"
import InfoProfile from "../../components/InfoProfile"
import { ContentDashboard, DashboardStyle } from "./style"

const DashBoard = () => {

  const navigate = useNavigate()

  return (
    <ContentDashboard>
      <span className="exit" onClick={() => navigate('../login', { replace: true })}>Sair</span>
      <DashboardStyle>
        <Header>MY APP</Header>
        <InfoProfile />
        <div>
          <h2>Lista de Contatos</h2>
          <button>+</button>
        </div>
        <ContactList />
      </DashboardStyle>
    </ContentDashboard>
  )
}

export default DashBoard