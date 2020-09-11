import axios from "axios";

export const fetchDataCorona = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/all/");
  return data;
};
