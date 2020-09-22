import { useQuery } from "react-query";
import { fetchDataCorona } from "../queries";

const getAllData = () => {
  return fetchDataCorona("all");
};

const getAllStatus = () => {
  return fetchDataCorona("countries");
};

// const countryData = (country) => {
//   return fetchCountryData(country);
// };

export function useGlobalData() {
  return useQuery("all", getAllData);
}

export function useStatesData() {
  return useQuery("status", getAllStatus);
}

// export function useCountryData(country) {
//   return useQuery("country", countryData(country));
// }
