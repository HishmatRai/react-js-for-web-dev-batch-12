import React, { useState } from "react";
import { Input, Button } from "../../components";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailValidation =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const SingInHandler = () => {
    if (email === "") {
      //   alert("Email Required!");
      toast("Email Required!", { type: "error" });
    } else if (!email.match(emailValidation)) {
      //   alert("Password Required!");
      toast("Please enter valid email address!", { type: "error" });
    } else if (password === "") {
      //   alert("Password Required!");
      toast("Password Required!", { type: "error" });
    } else {
      console.log("Email", email);
      console.log("Password", password);
      toast("Success!", { type: "success" });
    }
  };
  return (
    <div>
      <h1>Log In Page</h1>
      <Input
        title="Email Address"
        value={email}
        type="email"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        title="Password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button title="Sign In" onClick={SingInHandler} />
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
};
export default Login;
