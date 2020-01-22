import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const link = {
      width: "100px",
      padding: "15px",
      //   margin: "0 6px 6px",
      textDecoration: "none",
      color: "white"
    };

    return (
      <div>
        <div className="header">
          <h1>N U T R I T I O N</h1>
        </div>
        <div className="nav-bar">
          {" "}
          <NavLink to="/" exact style={link}>
            Home
          </NavLink>
          <NavLink to="/search" exact style={link}>
            Search
          </NavLink>
          <NavLink to="/profile" exact style={link}>
            Profile
          </NavLink>
          <NavLink to="/nav" exact style={link}>
            Registration
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Header;
