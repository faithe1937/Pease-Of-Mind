import React from "react";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Recipe = ({ title, calories, image, totalNutrients }) => {
  console.log(totalNutrients.FAT.label);
  return (
    <div className="column">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <br />
      <br />
      Calories: {Math.round(calories)} kcal
      <br />
      Fat: {Math.round(totalNutrients.FAT.quantity)} grams
      <br />
      Carbs: {Math.round(totalNutrients.CHOCDF.quantity)} grams
      <br />
      Protein: {Math.round(totalNutrients.PROCNT.quantity)} grams
      <br />
      <br />
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </div>
  );
};

export default Recipe;
