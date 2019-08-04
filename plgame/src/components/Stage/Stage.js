import React from "react";
import { Active } from "../Active";
import { Reserve } from "../Reserve";
import "./Stage.css";

class Stage extends React.Component {
  render() {
    const { friendly, enemy } = this.props;
    return (
      <div className="component">
        <div id="enemy">
          <Active pArray={enemy} />
        </div>
        <div id="friendly">
          <Active pArray={friendly} />
        </div>
      </div>
    );
  }
}

export default Stage;
