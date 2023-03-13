import "./NavBar.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
export const NavBar = () => {
  // const navigate = useNavigate();
  // const [active, setActive] = useState("nav-option nav-speaking");

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-option">
          <img src={require("../img/user.png")} alt="Section logo" />
          <p>User</p>
        </div>

        <NavLink className="nav-option nav-home" to=" ">
          <img src={require("../img/home.png")} alt="Section logo" />
          <p>Home</p>
        </NavLink>

        <NavLink className="nav-option nav-speaking" to="speaking">
          <img src={require("../img/speaking.png")} alt="Section logo" />
          <p>Speaking</p>
        </NavLink>

        <NavLink className="nav-option nav-listening" to="listening">
          <img src={require("../img/listening.png")} alt="Section logo" />
          <p>Listening</p>
        </NavLink>

        <NavLink className="nav-option nav-writing" to="writing">
          <img src={require("../img/writing.png")} alt="Section logo" />
          <p>Writing</p>
        </NavLink>

        <NavLink className="nav-option nav-reading" to="reading">
          <img src={require("../img/read.png")} alt="Section logo" />
          <p>Reading</p>
        </NavLink>

        <NavLink className="nav-option nav-words" to="words">
          <img src={require("../img/words.png")} alt="Section logo" />
          <p>My words</p>
        </NavLink>
      </div>
    </div>
  );
};
