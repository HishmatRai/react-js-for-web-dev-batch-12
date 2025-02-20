import React, { useState } from "react";
import Navbar from "./components/navbar";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  let emailValidation =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // login function
  const LoginHandler = () => {
    setMessageType("error");
    setTimeout(() => {
      setMessage("")
    }, 2000);
    if (email === "") {
      // alert("Email Required!");
      // setMessageType("error");
      setMessage("Email Required!");
    } else if (!email.match(emailValidation)) {
      // alert("Please enter valid email address");
      // setMessageType("error");
      setMessage("Please enter valid email address");
    } else if (password === "") {
      // alert("Password Required!");
      // setMessageType("error");
      setMessage("Password Required!");
    } else {
      console.log("Email :- ", email);
      console.log("Password :- ", password);
      setMessageType("success");
      setMessage("Success!");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setMessage("")
      }, 2000);
    }
  };
  return (
    <div>
      <h1 style={{ backgroundColor: "blue", color: "white" }}>Login Page</h1>
    <Navbar />
      <p>Email :- {email}</p>
      <p>Email Address</p>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Password</p>
      <input
        type="password"
        placeholder="Password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p style={{ color: messageType === "error" ? "red" : "green" }}>
        {message}
      </p>
      <p className={messageType === "error" ? "error" : "success"}>{message}</p>
      <button onClick={LoginHandler}>Log In</button>
    </div>
  );
};
export default Login;
