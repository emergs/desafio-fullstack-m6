import ContactList from "../../components/ContactList"
import InfoProfile from "../../components/InfoProfile"
import { DashboardStyle } from "./style"

const DashBoard = () => {
  return (
    <DashboardStyle>
      <h1>MY APP</h1>
      <InfoProfile />
      <div>
        <h2>Lista de Contatos</h2>
        <button>+</button>
      </div>
      <ContactList />
    </DashboardStyle>
  )
}

export default DashBoard