import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div class="ui tabular menu">
        <Link
          to="/cats"
          //   className={`item ${props.location.pathname === "/" ? "active" : ""}`}
        >
          Cats Photos
        </Link>
        {/* <a class="item">Cats Photos</a> */}
        <Link
          to="/dogs"
          //   className={`item ${
          //     props.location.pathname === "/dogs" ? "active" : ""
          //   }`}
        >
          Dogs Photos
        </Link>
        {/* <a class="item active">Dog Photos</a> */}
      </div>
    </>
  );
};

export default NavBar;
