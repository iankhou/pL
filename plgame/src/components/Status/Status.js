import React from "react";

const Stats = props => {
  // draws info from a stat object
  return (
    <div>
      <ul>
        <li>IQ: {props.iq}</li>
        <li>EQ: {props.eq}</li>
        <li>Adaptability: {props.adby}</li>
        <li>Social: {props.soc}</li>
        <li>Cleanliness: {props.cln}</li>
        <li>Income: {props.inc}</li>
        <li>Power: {props.pow}</li>
      </ul>
    </div>
  );
};

export default Stats;
