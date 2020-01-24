import React from "react";
import UserInfo from "./UserInfo";
import Chart from "./Chart";

const FavContainer = props => {

let calories = Math.round((props.user.weight * 6.24) + (props.user.height * 12.7) - (props.user.age * 6.755))
let fat = Math.round((calories * .30) )// / (9)
let carb = Math.round((calories * .40)) // (4)
let protein = Math.round((calories * .30)) // / (4)

  return (
    <div>
      <UserInfo user={props.user} {...props}/>
      <br />
      <br />
      <br />
      <Chart userData={props.user} 
      calories={calories} 
      fat={fat}
      carb={carb}
      protein={protein} 
      {...props}/>
    </div>
  );
};

export default FavContainer;
