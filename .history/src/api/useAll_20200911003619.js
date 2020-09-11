import { useQuery } from "react-query";
import { fetchDataCorona } from "../queries";

const getAll = ({ data, isLoading, isError } = useQuery(
  ["global", "all"],
  fetchDataCorona
));
