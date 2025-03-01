import React from "react";
import Navbar from "./../navbar";
import Footer from "../footer";
const Layout = ({ children, }) => {
  return (
    <div>
      <Navbar  />
      {children}
      <Footer children={children}/>
    </div>
  );
};
export default Layout;
