import React from "react";
import "./App.css";
import { Router } from "./config";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  AOS.init();
  return (
    <div>
      <Router />
      <ToastContainer />
    </div>
  );
};
export default App;
