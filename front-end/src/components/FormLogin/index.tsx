import Header from "../Header"
import { ButtonForm, DivLabelInput, FormStyle } from "./style"
import { useNavigate } from 'react-router-dom'
import { FormStyled } from "../Form/style"
import { useContext, useState } from "react"
import { CustomerContext, ICustomerLogin } from "../../contexts/customer"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  email: yup.string().required('Digite o email').email('Digite um email válido'),
  password: yup.string().required('Digite a sua senha')
})


const FormLogin = () => {

  const navigate = useNavigate()

  const { customerLogin } = useContext(CustomerContext)

  const { register, handleSubmit, formState: { errors } } = useForm<ICustomerLogin>({
    resolver: yupResolver(schema)
  })

  return (
    <FormStyled onSubmit={handleSubmit(customerLogin)}>
      <Header>Login</Header>
      <DivLabelInput>
        <label>User</label>
        <input type="email" placeholder="Email" {...register('email')} />
        <p>{errors.email?.message}</p>

      </DivLabelInput>
      <DivLabelInput>
        <label>Password</label>
        <input type="password" placeholder="Password"  {...register('password')} />
        <p>{errors.password?.message}</p>
      </DivLabelInput>
      <ButtonForm>
        <span>Manter conectado</span>
        <span>Esqueceu a senha?</span>
        <button type="submit" className="button-default">Logar</button>
      </ButtonForm>
      <span>Não possui cadastro? Inscreva-se <span onClick={() => navigate('../register', { replace: true })}>aqui</span></span>
    </FormStyled>
  )
}

export default FormLogin