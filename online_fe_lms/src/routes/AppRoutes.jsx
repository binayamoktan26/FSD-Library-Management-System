import React from 'react'
import { Routes, Route } from "react-router-dom";
import {HomePage , DashboardPage} from "../pages";
const AppRoutes = () => {
  return (
    <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />
        {/* Private Pages  */}
        <Route path ="/user" element={<DashboardPage />}/>
    </Routes>
  )
}

export default AppRoutes