// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import Firebase from "./index";
// import { useNavigate } from "react-router-dom";
// const provider = new GoogleAuthProvider();
// const auth = getAuth();
// const SignInWithGoogleHandle = () => {
//   const navigate = useNavigate();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const user = result.user;
//       console.log("user", user);
//       navigate("/");
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       console.log("errorMessage", errorMessage);
//     });
// };
// const SignInWithFacebookHandle = () => {
//   console.log("SignInWithFacebookHandle");
// };
// export { SignInWithGoogleHandle, SignInWithFacebookHandle };

import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Firebase from "./index";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const SocailLogin = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const db = getFirestore();

  const SignInWithGoogleHandle = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        console.log("user", user);
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
      });
  };
  const SignInWithFacebookHandle = () => {
    console.log("SignInWithFacebookHandle");
  };
  return { SignInWithGoogleHandle, SignInWithFacebookHandle };
};

export default SocailLogin;
