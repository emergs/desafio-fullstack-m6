import Header from "../Header"
import { ButtonForm, DivLabelInput, FormStyle } from "./style"
import { useNavigate } from 'react-router-dom'
import Form from "../Form"

const FormLogin = () => {

  const navigate = useNavigate()

  return (
    <Form>
      <Header>Login</Header>
      <DivLabelInput>
        <label>User</label>
        <input placeholder="User"></input>
      </DivLabelInput>
      <DivLabelInput>
        <label>Password</label>
        <input placeholder="Password"></input>
      </DivLabelInput>
      <ButtonForm>
        <span>Manter conectado</span>
        <span>Esqueceu a senha?</span>
        <button className="button-default">Logar</button>
      </ButtonForm>
      <span>Não possui cadastro? Inscreva-se <button onClick={() => navigate('../register', { replace: true })}>aqui</button></span>
    </Form>
  )
}

export default FormLogin