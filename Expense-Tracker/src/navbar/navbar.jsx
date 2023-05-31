import React from "react";
import { NavLink } from "react-router-dom";

const navbar = ["home", "history", "profile"];
const Navbar = () => {
  return (
    <nav>
      {navbar.map((nav) => (
        <NavLink to={`/${nav}`} key={nav}>
          {nav[0].toUpperCase() + nav.slice(1)}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
