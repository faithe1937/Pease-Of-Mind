import React, { Component } from "react";
import SideBar from "./SideBar";
import Content from "./Content";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      selectedMacro: {}
    };
  }

  handleMacroClick = macro => {
    this.setState({ selectedMacro: macro });
  };

  render() {
    console.log(this.props.macros);
    return (
      <div className="container">
        {/* {this.props.macros.map(macro => ( */}
        <SideBar
          //   key={macro.id}
          //   macro={macro}
          handleMacroClick={this.handleMacroClick}
        />
        {/* ))} */}
        <Content />
      </div>
    );
  }
}
export default Container;
