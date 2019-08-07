import React from "react";
import { Card } from "../Card";
import "./Reserve.css";

class Reserve extends React.Component {
  render() {
    const { cArray } = this.props;
    return (
      <div className="reserve-content">
        <Card character={cArray[0]} />
        <Card character={cArray[1]} />
        <Card character={cArray[2]} />
      </div>
    );
  }
}

export default Reserve;
