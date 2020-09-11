import { useQuery } from "react-query";
import axios from "axios";
import { fetchDataCorona } from "../queries";

const getPosts = () => {
  return fetchDataCorona();
};

export default function useAll() {
  return useQuery("posts", getPosts);
}
