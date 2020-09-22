import React, { useState } from "react";
import { useStatesData } from "../api/all-api";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const StateCases = ({ setCountryName }) => {
  const [search, setSearch] = useState("");
  const { status, data, error } = useStatesData();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return (
      <p>
        <span>Error: {error.message}</span>
      </p>
    );
  }

  return (
    <div className="states-cases">
      <p className="text-white text-center header-title">
        Cases by Country/Continents
      </p>
      <Tabs>
        <div className="states-list">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <TabPanel>
            {search.length === 0
              ? data.map((d, i) => (
                  <div
                    key={i}
                    className="state-status"
                    onClick={() => setCountryName(d)}
                  >
                    <span className="text-red numbers">{d.cases}</span>
                    <span className="text-white name">{d.country}</span>
                  </div>
                ))
              : data.map((d, i) => {
                  if (d.country.toLowerCase().includes(search.toLowerCase())) {
                    return (
                      <div
                        key={i}
                        className="state-status"
                        onClick={() => setCountryName(d)}
                      >
                        <span className="text-red numbers">{d.cases}</span>
                        <span className="text-white name">{d.country}</span>
                      </div>
                    );
                  }
                })}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </div>
        <TabList>
          <Tab>Countries</Tab>
          <Tab>Continents</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default StateCases;
