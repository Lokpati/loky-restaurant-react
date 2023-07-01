import React from "react";

const User = (props) => {
  return (
    <div className="user-card">
      <div>Name: {props.name}</div>
      <div>Location: {props.location}</div>
    </div>
  );
};

export default User;
