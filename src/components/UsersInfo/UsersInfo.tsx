import {Dispatch} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {tableFiltersActions} from "../../store/slices/tableFiltersSlice";
import {useGetUsersQuery} from "../../store/slices/usersApiSlice";
import Table, {ColumnDef} from "../Table/Table";

const getColumnDefs = (dispatch: Dispatch): ColumnDef[] => [
  {
    field: "name",
    headerName: "Name",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: "name", value})),
    inputProps: {placeholder: "Filter by name"},
  },
  {
    field: "username",
    headerName: "Username",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: "username", value})),
    inputProps: {placeholder: "Filter by username"},
  },
  {
    field: "email",
    headerName: "Email",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: "email", value})),
    inputProps: {placeholder: "Filter by email"},
  },
  {
    field: "phone",
    headerName: "Phone",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: "phone", value})),
    inputProps: {placeholder: "Filter by phone"},
  },
];

const UsersInfo = () => {
  const {data: users} = useGetUsersQuery();
  const dispatch = useDispatch();

  if (!users) return null;

  return <Table data={users} columnDefs={getColumnDefs(dispatch)} />;
};

export default UsersInfo;
