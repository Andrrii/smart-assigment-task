import {Dispatch} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {tableFiltersActions} from "../../store/slices/tableFiltersSlice";
import {useGetUsersQuery} from "../../store/slices/usersApiSlice";
import Table, {ColumnDef} from "../Table/Table";

enum Columns {
  name = "name",
  username = "username",
  email = "email",
  phone = "phone",
  website = "website",
}

const getColumnDefs = (dispatch: Dispatch): ColumnDef[] => [
  {
    field: Columns.name,
    headerName: "Name",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: Columns.name, value})),
    inputProps: {placeholder: "Filter by name"},
  },
  {
    field: Columns.username,
    headerName: "Username",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: Columns.username, value})),
    inputProps: {placeholder: "Filter by username"},
  },
  {
    field: Columns.email,
    headerName: "Email",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: Columns.email, value})),
    inputProps: {placeholder: "Filter by email"},
  },
  {
    field: Columns.phone,
    headerName: "Phone",
    isFilterable: true,
    onFilterChanged: (value: string) =>
      dispatch(tableFiltersActions.setFilter({field: Columns.phone, value})),
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
