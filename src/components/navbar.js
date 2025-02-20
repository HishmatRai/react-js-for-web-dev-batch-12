import React from "react";
import "./navbar.css";
import { Link ,useNavigate} from "react-router-dom";
const Navbar = () => {
    let navigate = useNavigate()
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-us">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/web-development">Web Development</a>
        </li>
        <li>
          <a href="/log-in">Login</a>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/web-development">Web Development</Link>
        </li>
        <li>
          <Link to="/log-in">Login</Link>
        </li>
      </ul>
      <hr />
      <button onClick={() => window.location.assign("/")}>Home</button>
      <button onClick={() => window.location.assign("/about-us")}>About</button>
      <button onClick={() => window.location.assign("/contact")}>Contact</button>
      <button onClick={() => window.location.assign("/web-development")}>Web Development</button>
      <button onClick={() => window.location.assign("/log-in")}>Login</button>
      <hr />
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about-us")}>About</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <button onClick={() => navigate("/web-development")}>Web Development</button>
      <button onClick={() =>navigate("/log-in")}>Login</button>
    </div>
  );
};
export default Navbar;
