import { IChildren } from "../../contexts"
import { FormStyled } from "./style"

const Form = ({ children }: IChildren) => {
  return (
    <FormStyled>{children}</FormStyled>
  )
}

export default Form