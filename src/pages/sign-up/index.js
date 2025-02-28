import React, { useState } from "react";
import { Input, Button } from "../../components";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailValidation =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const SingUpHandler = () => {
    if (email === "") {
      toast("Email Required!", { type: "error" });
    } else if (!email.match(emailValidation)) {
      toast("Please enter valid email address!", { type: "error" });
    } else if (password === "") {
      toast("Password Required!", { type: "error" });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user", user);
          toast("Success!", { type: "success" });
          setEmail("");
          setPassword("");
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast(errorMessage, { type: "error" });
          console.log("error", error);
        });
    }
  };
  return (
    <div>
      <h1>SignUp Page</h1>
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
      <Button title="Sign Up" onClick={SingUpHandler} />
      <Link to="/log-in">Log In</Link>
    </div>
  );
};
export default SignUp;
