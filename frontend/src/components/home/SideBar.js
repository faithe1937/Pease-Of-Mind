import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div className="master-detail-element sidebar">
        <ul className="ul" onClick={this.props.handleMacroClick}>
          <li>Fat</li>
          <br />
          <li>Protein</li>
          <br />
          <li>Carbohydrates</li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
