import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Root;
