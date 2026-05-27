import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <br />
      <Link to="contact">Contatos</Link> */}
      {/* 9 - NavLink */}
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <br />
      <NavLink
        to="contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contatos
      </NavLink>
    </div>
  );
};

export default Navbar;
