import React from 'react'
import { Routes, Route } from "react-router-dom";
import {HomePage , DashboardPage} from "../pages";
import DefaultLayouts from '../components/layouts/DefaultLayouts';
const AppRoutes = () => {
  return (
    <Routes>
        {/* Public Pages */}
        <Route path="/" element={<DefaultLayouts><HomePage /></DefaultLayouts>} />
        {/* Private Pages  */}
        <Route path ="/user" element={<DashboardPage />}/>
    </Routes>
  )
}

export default AppRoutes