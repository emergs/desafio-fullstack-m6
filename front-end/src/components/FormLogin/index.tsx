import { ButtonForm, DivLabelInput, FormStyle } from "./style"

const FormLogin = () => {
  return (
    <FormStyle>
      <h1>Login</h1>
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
        <button>Logar</button>
      </ButtonForm>
      <span>Não possui cadastro? Inscreva-se <a>aqui</a></span>
    </FormStyle>
  )
}

export default FormLogin