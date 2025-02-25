import React from "react";
import './App.css'
import { Router } from "./config";
import AOS from 'aos';
import 'aos/dist/aos.css'
const App = () => {
  AOS.init()
  return <Router />;
};
export default App;
