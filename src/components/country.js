import React from "react";
import styled from "styled-components";
import Table from "./table";

const Styles = styled.div`
  padding: 1rem;
  max-height: 490px;
  overflow-y: scroll;
  table {
    border-spacing: 0;
    border: 2px solid #aaa;
    width: 100%;
    color: #fff;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    thead th {
      position: sticky;
      position: -webkit-sticky;
      top: -17px;
      z-index: 10;
      background-color: #333;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 2px solid #aaa;
      border-right: 2px solid #aaa;
      border-top: 2px solid #aaa;
      width: 50%;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

const Country = ({ countryName }) => {
  console.log(countryName);
  if (countryName.countryInfo == null) {
    return (
      <div className="country">
        <h1 className="text-white">Please Select One Country</h1>;
      </div>
    );
  }
  return (
    <div className="country">
      <div className="flag">
        <img src={countryName.countryInfo.flag} alt="flag" />
      </div>
      <h1 className="text-center text-white country-name">
        {countryName.country} ({countryName.countryInfo.iso2})
      </h1>
      <Styles>
        <Table columns={countryName} />
      </Styles>
    </div>
  );
};

export default Country;
