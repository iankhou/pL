import React from "react";
import "./Stats.css";

const Stats = ({ person }) => {
  // draws info from a stat object
  return (
    <div>
      <div className="stat-content">
        <ul>
          <li>IQ: {person.iq}</li>
          <li>EQ: {person.eq}</li>
          <li>Adaptability: {person.aby}</li>
          <li>Social: {person.soc}</li>
          <li>Cleanliness: {person.cln}</li>
          <li>Income: {person.inc}</li>
          <li>Power: {person.pow}</li>
        </ul>
      </div>
    </div>
  );
};

export default Stats;
