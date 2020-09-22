import React, { useState } from "react";

import Country from "./country";
import StateCases from "./state-cases";

const Details = () => {
  const [countryName, setCountryName] = useState({}); // lefting up the state
  return (
    <div className="details">
      <StateCases setCountryName={setCountryName} />

      <Country countryName={countryName} />
    </div>
  );
};

export default Details;
