import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignInPage,
  SignUpPage,
  ForgetPasswordPage,
  BookLandingPage,
} from "../pages";
import DefaultLayouts from "../components/layouts/DefaultLayouts";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<DefaultLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<SignInPage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route path="forget-password" element={<ForgetPasswordPage />}></Route>
      </Route>
      {/* Private Pages  */}
      <Route path="/user" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
