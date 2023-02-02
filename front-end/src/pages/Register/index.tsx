import Content from "../../components/Content"
import { FormStyled } from "../../components/Form/style"
import Header from "../../components/Header"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const navigate = useNavigate()

  return (
    <Content>
      <FormStyled>
        <div className="header-register">
          <Header>Cadastro</Header>
          <button
            onClick={() => navigate('../login', { replace: true })}>Voltar
          </button>
        </div>
        <div className="div-label-input">
          <label htmlFor="name">Nome</label>
          <input id="name" placeholder="Nome" type="text" />
        </div>
        <div className="div-label-input">
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Email" type="text" />
        </div>
        <div className="div-label-input">
          <label htmlFor="phone">Telefone</label>
          <input id="phone" placeholder="Telefone" type="text" />
        </div>
        <div className="div-label-input">
          <label htmlFor="password">Senha</label>
          <input id="password" placeholder="Senha" type="text" />
        </div>
        <div className="div-label-input">
          <button className="button-default">Cadastrar</button>
        </div>
      </FormStyled>
    </Content>
  )
}

export default Register