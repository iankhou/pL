import React from "react";
import { Active } from "../Active";
import { Reserve } from "../Reserve";
import "./Stage.css";

class Stage extends React.Component {
  render() {
    const { friendly, enemy } = this.props;
    return (
      <div className="component">
        <div className="stage-content">
          <div id="enemy">
            <Active cArray={enemy} />
          </div>
          <div id="versus">VERSUS</div>
          <div id="friendly">
            <Active cArray={friendly} />
          </div>
        </div>
      </div>
    );
  }
}

export default Stage;
