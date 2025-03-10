import React from "react";
import { Layout } from "../../components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Firebase from "../../config/firebase";
// const Contact = () => {
//   const auth = getAuth();

//   const [name, setName] = React.useState("iHunar");
//   const [password, setPassword] = React.useState();
//   const [hide, setHide] = React.useState(true);
//   // update
//   const updateHandler = () => {
//     setName("ABC");
//   };

//   React.useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("Login true", user.user);
//       } else {
//         console.log("User is signed out");
//       }
//     });
//   }, []);
//   return (
//     <Layout>
//       <h1>Contact.js </h1>
//       <p>Name :- {name}</p>
//       <input
//         type="text"
//         placeholder="Update user name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <hr />
//       <input type={hide ? "password" : "text"} placeholder="Password" />
//       <button onClick={() => setHide(!hide)}>{hide ? "Show" : "Hide"}</button>
//       <hr />
//       <button onClick={() => setName("iSkillers")}>Update Name</button>
//       <button onClick={updateHandler}>Update</button>
//     </Layout>
//   );
// };
const auth = getAuth();
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "iHunar",
      hide: true,
    };
  }

  updateHandler = () => {
    this.setState({ name: "ABC" });
  };

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Login true", user.user);
      } else {
        console.log("User is signed out");
      }
    });
  }
  render() {
    const { hide } = this.state;
    return (
      <Layout>
        <h1>Contact.js</h1>
        <p>Name :- {this.state.name}</p>
        <input
          type="text"
          placeholder="Full Name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <hr />
        <input type={hide ? "password" : "text"} placeholder="Password" />
        <button onClick={() => this.setState({ hide: !this.state.hide })}>
          {this.state.hide ? "Show" : "Hide"}
        </button>
        <button onClick={() => this.setState({ hide: !hide })}>
          {hide ? "Show" : "Hide"}
        </button>
        <hr />
        <button onClick={() => this.setState({ name: "iSkillers" })}>
          Change Name
        </button>
        <button onClick={this.updateHandler}>Update</button>
      </Layout>
    );
  }
}
export default Contact;
