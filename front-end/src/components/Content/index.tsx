import { IChildren } from "../../contexts"
import { ContentStyle } from "./style"

const Content = ({ children }: IChildren) => {
  return (
    <ContentStyle>{children}</ContentStyle>
  )
}

export default Content