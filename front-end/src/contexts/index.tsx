import { ReactNode } from "react"
import CustomerProvider from "./customer"

export interface IChildren {
  children: ReactNode
}

const Providers = ({ children }: IChildren) => {
  return (
    <CustomerProvider>{children}</CustomerProvider>
  )
}

export default Providers