import { Request, Response } from "express"
import loginService from "../services/login/login.service"

const loginController = async (req: Request, res: Response) => {
  const dataLogin = req.body
  const token = await loginService(dataLogin);
  return res.status(200).json({ token })
}

export default loginController