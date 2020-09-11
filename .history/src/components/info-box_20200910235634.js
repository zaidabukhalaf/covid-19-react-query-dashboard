import React from "react";

const InfoBox = ({ textWhite, textRed }) => {
  return (
    <div className="info-box">
      <p className="text-red">{textRed}</p>
      <p className="text-white">{textWhite}</p>
    </div>
  );
};

export default InfoBox;
