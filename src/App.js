import React from "react";
import './App.css'
// function App() {
//   return (
//     <div>
//       <h1>Main Page</h1>
//     </div>
//   );
// }
const App = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <h1 id="h1">Main Page</h1>
      <h1>Main Page</h1>
      <h1>Main Page</h1>
      <h1 className="h1">Main Page</h1>
      <h1 className="h1">Main Page</h1>
      <h1 className="h1">Main Page</h1>
      <h1>Main Page</h1>
      <h1>Main Page</h1>
      {/* <p style="color:red;"> */}
      <p style={{ color: "red", backgroundColor: "green" }}>
        IT services provider company managed by highly experienced information
        technology professionals.
      </p>
      <form>
        <input type="text" />
      </form>
      <table>
        <tr>
          <td>fsdf</td>
          <td>fsdf</td>
          <td>fsdf</td>
          <td>fsdf</td>
        </tr>
      </table>
    </div>
  );
};
export default App;
