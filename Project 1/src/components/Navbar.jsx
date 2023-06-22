import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src="/images/brand_logo.png" alt="logo" />
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
