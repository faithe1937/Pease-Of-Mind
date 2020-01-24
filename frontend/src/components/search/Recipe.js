import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

class Recipe extends Component {
  render() {
    return (
      <div className="column">
        <h1>{this.props.title}</h1>
        <img src={this.props.image} alt="" />
        <br />
        <br />
        Calories: {Math.round(this.props.calories)} kcal
        <br />
        Fat: {Math.round(this.props.totalNutrients.FAT.quantity)} grams
        <br />
        Carbs: {Math.round(this.props.totalNutrients.CHOCDF.quantity)} grams
        <br />
        Protein: {Math.round(this.props.totalNutrients.PROCNT.quantity)} grams
        <br />
        <br />
        {/* <div onClick={() => this.props.handleFavorite}> */}
        <Fab>
          <FavoriteIcon />
        </Fab>
        {/* </div> */}
      </div>
    );
  }
}

export default Recipe;
