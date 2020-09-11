import { useQuery } from "react-query";
import { fetchDataCorona } from "../queries";

const AllStatus = (props) => {
  const { data, isLoading, isError } = useQuery(
    ["global", "all"],
    fetchDataCorona
  );
};

export default AllStatus;
