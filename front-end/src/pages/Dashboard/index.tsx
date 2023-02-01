import ContactList from "../../components/ContactList"
import Content from "../../components/Content"
import Header from "../../components/Header"
import InfoProfile from "../../components/InfoProfile"
import { DashboardStyle } from "./style"

const DashBoard = () => {
  return (
    <Content>
      <DashboardStyle>
        <Header>MY APP</Header>
        <InfoProfile />
        <div>
          <h2>Lista de Contatos</h2>
          <button>+</button>
        </div>
        <ContactList />
      </DashboardStyle>
    </Content>
  )
}

export default DashBoard