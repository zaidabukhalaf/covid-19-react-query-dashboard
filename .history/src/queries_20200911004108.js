import axios from "axios";

export const fetchDataCorona = async (param) => {
  const { data } = await axios.get(`https://disease.sh/v3/covid-19/${param}`);
  return data;
};
