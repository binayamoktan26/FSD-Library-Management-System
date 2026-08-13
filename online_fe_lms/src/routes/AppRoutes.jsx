import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignInPage,
  SignUpPage,
  ForgetPasswordPage,
  BookLandingPage,
  Books,
  EditBookPage,
  NewBook,
  ReviewPage,
  UserPage,
  Profile,
  BorrowPage,
} from "../pages";
import UserLayouts from "@components/layouts/UserLayouts";
import DefaultLayouts from "@components/layouts/DefaultLayouts";

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

      <Route path="/user" element={<UserLayouts />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="reviews" element={<ReviewPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="borrow-history" element={<BorrowPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="new-book" element={<NewBook />} />
        <Route path="edit-book" element={<EditBookPage />} />{" "}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
