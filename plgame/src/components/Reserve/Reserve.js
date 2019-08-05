import React from "react";
import { Card } from "../Card";
import "./Reserve.css";

class Reserve extends React.Component {
  render() {
    const { cArray } = this.props;
    return (
      <div className="reserve-content">
        <Card person={cArray[0]} />
        <Card person={cArray[1]} />
        <Card person={cArray[2]} />
      </div>
    );
  }
}

export default Reserve;
