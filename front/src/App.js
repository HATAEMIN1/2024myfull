import React from "react";
import "./assets/css/tStyle.scss";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";

function Layout() {
  return (
    <>
      <Navbar></Navbar>
    </>
  );
}

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
