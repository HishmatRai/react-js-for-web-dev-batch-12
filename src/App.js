import React, { Component, useState } from "react";
import Home from "./home";
import "./App.css";
import About from "./About";
import Contact from "./contact";
import Login from "./login";
// const activePage = "Web Development";
const App = () => {
  const [activePage, setActivePage] = useState("Login");
  const pagesList = [
    "Web Development",
    "Home",
    "About",
    "Contact",
    "Gallery",
    "Login",
  ];
  // const pagesList = [
  //   {
  //     title: "Web Development",
  //     component: <Web Development />,
  //   },
  //   {
  //     title: "Home",
  //     component: <Home />,
  //   },
  // ];
  // let username = "iHunar Academy";
  // let [username, setUsername] = React.useState("iHunar Academy");
  // const [email,setEmail] = useState("info@gmail.com")
  // function Login() {
  //   alert("login function");
  // }
  // const signUp = () => {
  //   alert("sign up function");
  // };
  return (
    <div>
      {/* <p>Username :- {username}</p> */}
      {/* <p>Email :- {email}</p> */}
      {/* <button onClick="alert('update')">Update</button> */}
      {/* <button onClick={()=>alert('update')}>Update</button> */}
      {/* <button onClick={()=>console.log('update')}>Update</button>
      <button onClick={()=>Login()}>Login</button>
      <button onClick={signUp}>Sign Up</button> */}
      {/* signUp signUp() */}
      {/* <button onClick="username = 'abc'">Update</button> */}
      {/* <button onClick={(username = "abc")}>Update</button> */}
      {/* <button onClick={()=> setUsername("Update")}>Update</button> */}
      {/* <button onClick={()=>setEmail("ihunar@gmail.com")}>Change Email</button> */}
      {/* <hr />
      <hr />
      <hr />
      <hr /> */}

      {pagesList.map((value, index) => {
        return (
          <button key={index} onClick={() => setActivePage(value)}>
            {value}
          </button>
        );
      })}
      {/* <button onClick={() => setActivePage("Web Development")}>
        Web Development
      </button>
      <button onClick={() => setActivePage("Home")}>Home</button>
      <button onClick={() => setActivePage("About")}>About</button>
      <button onClick={() => setActivePage("Contact")}>Contact</button> */}
      <hr />
      {activePage === "Web Development" ? (
        <h1 style={{ backgroundColor: "red", color: "white" }}>
          Web Development Page
        </h1>
      ) : activePage === "About" ? (
        <About />
      ) : activePage === "Home" ? (
        <Home />
      ) : activePage === "Contact" ? (
        <Contact />
      ) : activePage === "Login" ? (
        <Login />
      ) : (
        <h1 style={{ backgroundColor: "red", color: "white" }}>
          Page not Found!
        </h1>
      )}
    </div>
  );
};
export default App;
