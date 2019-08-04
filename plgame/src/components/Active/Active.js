
import React from "react";
import { Card } from "../Card";
import "./Active.css";

class Active extends React.Component {
  render() {
    const { pArray } = this.props;
    return (
      <div>
        <Card person={pArray[0]} />
        <Card person={pArray[1]} />
        <Card person={pArray[2]} />
        <Card person={pArray[3]} />
        <Card person={pArray[4]} />
      </div>
    );
  }
}

export default Active;
