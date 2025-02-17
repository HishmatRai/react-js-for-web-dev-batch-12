import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let emailValidation =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // login function
  const LoginHandler = () => {
    if (email === "") {
      alert("Email Required!");
    } else if (!email.match(emailValidation)) {
      alert("Please enter valid email address");
    } else if (password === "") {
      alert("Password Required!");
    } else {
      console.log("Email :- ", email);
      console.log("Password :- ", password);
      setEmail("");
      setPassword("")
    }
  };
  return (
    <div>
      <h1 style={{ backgroundColor: "blue", color: "white" }}>Login Page</h1>
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
      <button onClick={LoginHandler}>Log In</button>
    </div>
  );
};
export default Login;
