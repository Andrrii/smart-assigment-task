import {Dispatch} from "@reduxjs/toolkit";
import {tableFiltersActions} from "../store/slices/tableFiltersSlice";
import {useGetUsersQuery} from "../store/slices/usersApiSlice";
import Table from "./Table/Table";
import {useDispatch} from "react-redux";

const getColumnDefs = (dispatch: Dispatch) => [
  {
    field: "name",
    headerName: "Name",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: "name", value})),
  },
  {
    field: "username",
    headerName: "Username",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: "username", value})),
  },
  {
    field: "email",
    headerName: "Email",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: "email", value})),
  },
  {
    field: "phone",
    headerName: "Phone",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: "phone", value})),
  },
];

const Monitor = () => {
  const {data: users} = useGetUsersQuery();
  const dispatch = useDispatch();

  if (!users) return null;

  return <Table data={users} columnDefs={getColumnDefs(dispatch)} />;
};

export default Monitor;
