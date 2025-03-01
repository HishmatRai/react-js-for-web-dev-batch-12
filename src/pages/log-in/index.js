import React, { useState } from "react";
import { Input, Button } from "../../components";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import {
//   SignInWithGoogleHandle,
//   SignInWithFacebookHandle,
// } from "../../config/firebase/social-login";
import SocailLogin from "./../../config/firebase/social-login";
const Login = () => {
  const { SignInWithGoogleHandle, SignInWithFacebookHandle } = SocailLogin();
  const auth = getAuth();
  const navigate = useNavigate();
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
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
          // ...
          toast("Signed in !", { type: "success" });
          setEmail("");
          setPassword("");
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast(errorMessage, { type: "error" });
        });
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
      <hr />
      <Button
        title="Sign In with Google"
        onClick={SignInWithGoogleHandle}
        borderRadius={10}
      />
      <Button
        title="Sign In with Facebook"
        onClick={() => SignInWithFacebookHandle()}
        borderRadius={10}
      />
    </div>
  );
};
export default Login;
