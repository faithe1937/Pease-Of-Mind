import React from "react";
import Button from "./Button";

const UserInfo = props => {
  //   console.log(props.user);

  return (
    <div className={"card"}>
      <br />
      <h1>
        Welcome, <i>{props.user.username}</i>
      </h1>
      Age: {props.user.age}
      <br />
      <br />
      Weight: {props.user.weight}
      <br />
      <br />
      Height: {props.user.height}
      <br />
      <br />
      Activity Level: {props.user.activity}
      <br />
      <br />
      <br />
      <button>Edit</button>
      <Button {...props}/>
    </div>
  );
};

export default UserInfo;
