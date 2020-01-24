import React from "react";
import UserInfo from "./UserInfo";
import Chart from "./Chart";

const FavContainer = props => {
  // console.log(props.user);
  return (
    <div>
      <UserInfo user={props.user} />
      <br />
      <br />
      <br />
      <Chart userData={props.user} />
    </div>
  );
};

export default FavContainer;
