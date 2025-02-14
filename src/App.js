import React, { useState } from "react";
import Home from "./home";
import "./App.css";
import About from "./About";
//
const App = () => {
  // let username = "iHunar Academy";
  let [username, setUsername] = React.useState("iHunar Academy");
  const [email,setEmail] = useState("info@gmail.com")
  function Login() {
    alert("login function");
  }
  const signUp = () => {
    alert("sign up function");
  };
  return (
    <div>
      <h1 style={{ backgroundColor: "red", color: "white" }}>
        Web Development Page
      </h1>
      <p>Username :- {username}</p>
      <p>Email :- {email}</p>
      {/* <button onClick="alert('update')">Update</button> */}
      {/* <button onClick={()=>alert('update')}>Update</button> */}
      {/* <button onClick={()=>console.log('update')}>Update</button>
      <button onClick={()=>Login()}>Login</button>
      <button onClick={signUp}>Sign Up</button> */}
      {/* signUp signUp() */}
      {/* <button onClick="username = 'abc'">Update</button> */}
      {/* <button onClick={(username = "abc")}>Update</button> */}
      <button onClick={()=> setUsername("Update")}>Update</button>
      <button onClick={()=>setEmail("ihunar@gmail.com")}>Change Email</button>
      <hr />
      <hr />
      <hr />
      <hr />
      <Home />
      <About />
    </div>
  );
};
export default App;
