import "./navbar.css";
import React from "react";

const Navbar = () => {
  const [change, setChange] = React.useState(false);
  const toggle = change ? "change" : "nochange";
  return (
    <div>
      <nav className={`navbar ${toggle}`}>
        <a href="/" className="navbar-link">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </a>
        <a href="/" className="navbar-link">
          <i className="fas fa-utensils"></i>
          <span>Meals</span>
        </a>
        <a href="/" className="navbar-link">
          <i className="fas fa-hamburger"></i>
          <span>Burger</span>
        </a>
        <a href="/" className="navbar-link">
          <i className="fas fa-pizza-slice"></i>
          <span>Pizza</span>
        </a>
        <a href="/" className="navbar-link">
          <i className="fas fa-blender-phone"></i>
          <span>Contact</span>
        </a>
      </nav>
      <div
        className={`menu ${toggle}`}
        onClick={() => setChange(!change)}
      ></div>
    </div>
  );
};
export default Navbar;
