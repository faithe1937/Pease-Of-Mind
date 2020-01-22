import React, { Component, Fragment } from "react";
import Container from "./Container";
import macronutrients from "./MacroData";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      macronutrients
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <Container macros={this.state.macronutrients} />
        </div>
      </Fragment>
    );
  }
}
export default Home;
