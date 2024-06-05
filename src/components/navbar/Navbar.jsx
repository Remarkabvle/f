import React from "react";
import { useDispatch } from "react-redux";
import { navigate } from "../../context/slice/navigationSlice";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <section>
      <nav className="navbar">
        <ul>
          <li onClick={() => dispatch(navigate("home"))}>Home</li>
          <li onClick={() => dispatch(navigate("products"))}>Products</li>
          <li onClick={() => dispatch(navigate("admin"))}>Admin</li>
        </ul>
      </nav>
      <hr />
    </section>
  );
};

export default Navbar;
