import React from "react";
import UserInfo from "./UserInfo";
import Chart from "./Chart";

const FavContainer = props => {

let calories = ((props.user.weight * 6.24) + (props.user.height * 12.7) - (props.user.age * 6.755))
let fat = ((calories/.30) / (9) )
let carb = ((calories/.40) / (4))
let protein = ((calories/.30) / (4)) 

  return (
    <div>
      <br />
      <UserInfo user={props.user} />
      <br />
      <br />
      <br />
      <Chart userData={props.user} 
      calories={calories} 
      fat={fat}
      carb={carb}
      protein={protein} />
    </div>
  );
};

export default FavContainer;
