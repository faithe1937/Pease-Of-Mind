import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = (props) => {
  const handleClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => console.log(error));
  };
  const link = {
    width: "100px",
    padding: "15px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "white",
  };

  return (
    <div>
      <div className='nav-bar'>
        <NavLink to='/' exact style={link}>
          Home
        </NavLink>
        <NavLink to='/search' exact style={link}>
          Search
        </NavLink>
        <NavLink to='/profile' exact style={link}>
          Profile
        </NavLink>
        <NavLink to='/login' exact style={link}>
          Sign In
        </NavLink>
        <Link to='/' onClick={handleClick}>
          Log Out
        </Link>
      </div>
      <div className='jumbotron header'>
        <h1 className='display-4'>Peas of Mind</h1>
      </div>
    </div>
  );
};

export default Header;
