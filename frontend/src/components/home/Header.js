import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

// class Header extends Component {
//   render() {
const Header = props => {
  // console.log(props)

  const handleClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        props.handleLogout();
        // props.history.push('/')
      })
      .catch(error => console.log(error));
  };
  //
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
        <h1>PEAS OF MIND</h1>
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
        <NavLink to="/login" exact style={link}>
          Sign In
        </NavLink>
        {/* { 
        props.loggedInStatus ?  */}
        <Link to="/" onClick={handleClick}>
          Log Out
        </Link>
        {/* } */}
      </div>
    </div>
  );
};

export default Header;
