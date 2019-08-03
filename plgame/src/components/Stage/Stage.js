import React from "react";
import { Active } from "../Active";

const Stage = props => {
  // must take an array of Cards as a parameter
  console.log(props);
  return (
    <div>
      <Active player={props.otherPlayer}/>
      <Active player={props.currentPlayer}/>
    </div>
  );
};

export default Stage;
