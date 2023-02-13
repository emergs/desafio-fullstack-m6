import Content from "../../components/Content"
import { FormStyled } from "../../components/Form/style"
import Header from "../../components/Header"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { CustomerContext, ICustomer, ICustomerRegister } from "../../contexts/customer"
import { useContext } from "react"
import { Button } from "../../components/Button"

const Register = () => {

  const { createCustomerStorage } = useContext(CustomerContext)

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<ICustomer>()

  return (
    <Content>
      <FormStyled onSubmit={handleSubmit(createCustomerStorage)}>
        <div className="header-register">
          <Header>Cadastro</Header>
          <Button
            onClick={() => navigate('../login', { replace: true })}>Voltar
          </Button>
        </div>
        <div className="div-label-input">
          <label htmlFor="name">Nome</label>
          <input id="name" placeholder="Nome" {...register('name')} />
        </div>
        <div className="div-label-input">
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Email" {...register('email')} />
        </div>
        <div className="div-label-input">
          <label htmlFor="phone">Telefone</label>
          <input id="phone" placeholder="Telefone" {...register('phone')} />
        </div>
        <div className="div-label-input">
          <label htmlFor="password">Senha</label>
          <input id="password" placeholder="Senha" {...register('password')} />
        </div>
        <div className="div-label-input">
          <button className="button-default">Cadastrar</button>
        </div>
      </FormStyled>
    </Content>
  )
}

export default Register