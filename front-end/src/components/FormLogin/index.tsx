import { ButtonForm, DivLabelInput, FormStyle } from "./style"

const FormLogin = () => {
  return (
    <FormStyle>
      <h1>My Manager</h1>
      <DivLabelInput>
        <label>User</label>
        <input placeholder="User"></input>
      </DivLabelInput>
      <DivLabelInput>
        <label>Password</label>
        <input placeholder="Password"></input>
      </DivLabelInput>
      <ButtonForm>
        <button>Logar</button>
      </ButtonForm>
    </FormStyle>
  )
}

export default FormLogin