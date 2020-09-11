import React from "react";
import NumberFormat from "react-number-format";

const InfoBox = ({ textWhite, textRed }) => {
  return (
    <div className="info-box">
      <p className="text-red">
        <NumberFormat
          value={textRed}
          displayType="text"
          thousandSeparator={true}
        />
      </p>
      <p className="text-white">{textWhite}</p>
    </div>
  );
};

export default InfoBox;
