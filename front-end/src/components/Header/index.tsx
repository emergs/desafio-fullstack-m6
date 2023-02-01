import { HeaderStyle } from "./style"
import { IChildren } from "../../contexts"

const Header = ({ children }: IChildren) => {
  return (
    <HeaderStyle>{children}</HeaderStyle>
  )
}

export default Header