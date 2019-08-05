import React from "react";
import "./Status.css";

const Status = ({ status }) => {
  return (
    <div>
      <div className="content-bar">
        {[...status].map((value, index) => {
          return (
            <div className={value.name} key={index}>
              {value.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Status;
