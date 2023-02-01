import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/Dashboard";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default AppRoutes;