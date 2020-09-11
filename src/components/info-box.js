import React from "react";
import NumberFormat from "react-number-format";

const InfoBox = ({ textWhite, text }) => {
  return (
    <div className="info-box">
      <p className="text-red">
        <NumberFormat
          value={text}
          displayType="text"
          thousandSeparator={true}
        />
      </p>
      <p className="text-white">{textWhite}</p>
    </div>
  );
};

export default InfoBox;
