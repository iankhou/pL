import React from "react";
import { Card } from "../Card";
import "./Active.css";

class Active extends React.Component {
  render() {
    const { cArray } = this.props;
    return (
      <div className="active-content">
        <Card character={cArray[0]} />
        <Card character={cArray[1]} />
        <Card character={cArray[2]} />
        <Card character={cArray[3]} />
        <Card character={cArray[4]} />
      </div>
    );
  }
}

export default Active;
