import React, { useState } from "react";
import { Input, Button } from "../../components";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase ,ref, set} from "firebase/database";
import { getFirestore ,doc, setDoc,} from "firebase/firestore";

import SocailLogin from "./../../config/firebase/social-login";
const SignUp = () => {
  const { SignInWithGoogleHandle, SignInWithFacebookHandle } = SocailLogin();
  const auth = getAuth();
  const database = getDatabase();
  const firestore = getFirestore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailValidation =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const SingUpHandler =async () => {
    if (email === "") {
      toast("Email Required!", { type: "error" });
    } else if (!email.match(emailValidation)) {
      toast("Please enter valid email address!", { type: "error" });
    } else if (password === "") {
      toast("Password Required!", { type: "error" });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
          const user = userCredential.user;
          sendEmailVerification(auth.currentUser).then(async() => {
            // Email verification sent!
            // ...
            console.log("user", user);
            toast("Success!,Email verification sent!", { type: "success" });
            setEmail("");
            setPassword("");
            // realtime database
            set(ref(database, 'users/' + user.uid), {
              username: "Testing",
              email: email,
            });
            // firestore database
            await setDoc(doc(firestore, "users", user.uid), {
              name: "Testing",
              email: email,
            });
            navigate("/");
          });
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
export default SignUp;
