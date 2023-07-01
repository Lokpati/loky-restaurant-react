import { useState } from "react";
import React from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h2>Count2 : {count2}</h2>
      <h1>Name: {props.name}</h1>
      <h2>Location: {props.location}</h2>
    </div>
  );
};

export default User;
