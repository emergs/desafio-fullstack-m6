import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/Dashboard";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { useContext, useEffect } from "react";
import { CustomerContext } from "../contexts/customer";

const AppRoutes = () => {

  // const { auth } = useContext(CustomerContext)

  // useEffect(() => {
  //   const isAuth = localStorage.getItem('@appDesafioFullStackM6TOKEN')
  //   console.log(isAuth)
  // }, [])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes;