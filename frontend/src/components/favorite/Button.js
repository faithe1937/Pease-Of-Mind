import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      // <div>
      //   <button>Favorites</button>
      // </div>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
        >
          Dropdown button
        </button>
        <div className="dropdown-menu">
          <span className="dropdown-item-text">Just Text</span>
        </div>
      </div>
    );
  }
}

export default Button;
