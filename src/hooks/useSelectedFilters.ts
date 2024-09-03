import {useSelector} from "react-redux";
import {StateSchema} from "../store/StateSchema";

const selectFilters = (state: StateSchema) => state.tableFilters.filters;

export const useSelectedFilters = () => useSelector(selectFilters);
