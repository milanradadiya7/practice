import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";
import Register from "./register";
import Layout from "./layout/layout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Profile from "./profile";
import UTable from "./table";
import User from "./user";
import ChangePass from "./changePass";

const root = ReactDOM.createRoot(document.getElementById("root"));
const token = localStorage.getItem("token");
// authenticator function
function AuthCheck({ children }) {
  return token ? children : <Navigate to="/login" replace />;
}

root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AuthCheck><Dashboard /></AuthCheck>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<AuthCheck><Profile /></AuthCheck>} />
          <Route path="/table" element={<AuthCheck><UTable /></AuthCheck>} />
          <Route path="/user/:userId" element={<AuthCheck><User /></AuthCheck>} />
          <Route path="/change-password" element={<AuthCheck><ChangePass /></AuthCheck>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
