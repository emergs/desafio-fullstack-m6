import { ReactNode } from "react"
import ContactsProvider from "./contacts"
import CustomerProvider from "./customer"

export interface IChildren {
  children: ReactNode
}

const Providers = ({ children }: IChildren) => {
  return (
    <CustomerProvider>
      <ContactsProvider>
        {children}
      </ContactsProvider>
    </CustomerProvider>
  )
}

export default Providers