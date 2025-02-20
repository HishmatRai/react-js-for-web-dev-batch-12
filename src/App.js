// import React, { Component, useState } from "react";
// import Home from "./home";
// import "./App.css";
// import About from "./About";
// import Contact from "./contact";
// import Login from "./login";
// import WebDevelopment from "./web-development";
// // const activePage = "Web Development";
// const App = () => {
//   const [activePage, setActivePage] = useState("Web Development");
//   // const pagesList = [
//   //   "Web Development",
//   //   "Home",
//   //   "About",
//   //   "Contact",
//   //   "Gallery",
//   //   "Login",
//   // ];

//   const pagesList = [
//     {
//       title: "Web Development",
//       component: <WebDevelopment />,
//     },
//     {
//       title: "Home",
//       component: <Home />,
//     },
//     {
//       title: "About",
//       component: <About />,
//     },
//     {
//       title: "Contact",
//       component: <Contact />,
//     },
//     {
//       title: "Login",
//       component: <Login />,
//     },
//   ];
//   // let username = "iHunar Academy";
//   // let [username, setUsername] = React.useState("iHunar Academy");
//   // const [email,setEmail] = useState("info@gmail.com")
//   // function Login() {
//   //   alert("login function");
//   // }
//   // const signUp = () => {
//   //   alert("sign up function");
//   // };
//   return (
//     <div>
//       {/* <p>Username :- {username}</p> */}
//       {/* <p>Email :- {email}</p> */}
//       {/* <button onClick="alert('update')">Update</button> */}
//       {/* <button onClick={()=>alert('update')}>Update</button> */}
//       {/* <button onClick={()=>console.log('update')}>Update</button>
//       <button onClick={()=>Login()}>Login</button>
//       <button onClick={signUp}>Sign Up</button> */}
//       {/* signUp signUp() */}
//       {/* <button onClick="username = 'abc'">Update</button> */}
//       {/* <button onClick={(username = "abc")}>Update</button> */}
//       {/* <button onClick={()=> setUsername("Update")}>Update</button> */}
//       {/* <button onClick={()=>setEmail("ihunar@gmail.com")}>Change Email</button> */}
//       {/* <hr />
//       <hr />
//       <hr />
//       <hr /> */}

//       {pagesList.map((value, index) => {
//         return (
//           <button
//             // style={{
//             //   backgroundColor: value.title === activePage ? "green" : "blue",
//             //   color:value.title === activePage ?"white":"black"
//             // }}
//             style={{
//               fontWeight: value.title === activePage && "bold",
//             }}
//             className={value.title === activePage ? "active-pages" : "pages"}
//             key={index}
//             onClick={() => setActivePage(value.title)}
//           >
//             {value.title}
//           </button>
//         );
//       })}
//       {/* <button onClick={() => setActivePage("Web Development")}>
//         Web Development
//       </button>
//       <button onClick={() => setActivePage("Home")}>Home</button>
//       <button onClick={() => setActivePage("About")}>About</button>
//       <button onClick={() => setActivePage("Contact")}>Contact</button> */}
//       <br />
//       <br />
//       <hr />
//       <br />
//       {/* {activePage === "Web Development" ? (
//         <WebDevelopment />
//       ) : activePage === "About" ? (
//         <About />
//       ) : activePage === "Home" ? (
//         <Home />
//       ) : activePage === "Contact" ? (
//         <Contact />
//       ) : activePage === "Login" ? (
//         <Login />
//       ) : (
//         <h1 style={{ backgroundColor: "red", color: "white" }}>
//           Page not Found!
//         </h1>
//       )} */}

//       {pagesList.map((val, index) => {
//         return (
//           <div key={index}>{val.title === activePage && val.component}</div>
//         );
//       })}
//     </div>
//   );
// };
// export default App;

import React from "react";
import WebDevelopment from "./web-development";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./contact";
import Login from "./login";
import Home from "./home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/log-in" element={<Login />} /> */}
        <Route path="/log-in" element={<Login />} />
        <Route path="/*" element={<h1>Page not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
