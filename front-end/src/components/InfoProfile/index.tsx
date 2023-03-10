import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { CustomerContext } from "../../contexts/customer"

const InfoProfile = () => {

  const { customer } = useContext(CustomerContext)

  return (

    <h3>Bem vindo {customer?.name}</h3>
  )
}

export default InfoProfile