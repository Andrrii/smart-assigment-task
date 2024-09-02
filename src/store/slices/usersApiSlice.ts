import {IUser} from "../../types/index";
import {rtkApi} from "../rtkApi";

export const usersApiSlice = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});

export const {useGetUsersQuery} = usersApiSlice;
