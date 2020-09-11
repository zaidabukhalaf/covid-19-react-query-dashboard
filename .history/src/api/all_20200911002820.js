import { useQuery } from "react-query";
import { fetchDataCorona } from "../queries";
import useStore from "../store";

const AllStatus = (props) => {
  const state = useStore();
  const { data, isLoading, isError } = useQuery(
    ["global", "all"],
    fetchDataCorona
  );
};

export default AllStatus;
