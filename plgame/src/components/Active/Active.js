import React from "react";
import { Card } from "../Card";
import "./Active.css";

class Active extends React.Component {
  render() {
    const { cArray } = this.props;
    return (
      <div className="active-content">
        <Card person={cArray[0]} />
        <Card person={cArray[1]} />
        <Card person={cArray[2]} />
        <Card person={cArray[3]} />
        <Card person={cArray[4]} />
      </div>
    );
  }
}

export default Active;
