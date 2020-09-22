import React from "react";

import { useTable } from "react-table";

const Table = ({ columns }) => {
  return (
    <table role="table">
      <thead>
        <tr role="row">
          <th>Info</th>
          <th>Numbers</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(columns).map(function (key, i) {
          if (key === "countryInfo" || key === "country" || key === "updated") {
            return;
          } else {
            return (
              <tr key={i}>
                <td>{key}</td>
                <td>{columns[key]}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default Table;
