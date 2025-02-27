import React from "react";
import Navbar from "./../navbar";
import Footer from "../footer";
const Layout = ({ children, url }) => {
  return (
    <div>
      <Navbar url={url} />
      {children}
      <Footer children={children}/>
    </div>
  );
};
export default Layout;
