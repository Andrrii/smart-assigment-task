import {useGetUsersQuery} from "../store/slices/usersApiSlice";
import Table from "./Table/Table";

const columnDefs = [
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "username",
    headerName: "Username",
  },
  {
    field: "email",
    headerName: "Email",
  },
  {
    field: "phone",
    headerName: "Phone",
  },
];

const Monitor = () => {
  const {data: users} = useGetUsersQuery();

  if (!users) return null;

  return <Table data={users} columnDefs={columnDefs} />;
};

export default Monitor;
