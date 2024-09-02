import {rtkApi} from "../rtkApi";

export const usersApiSlice = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    //TODO: add type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUsers: builder.query<any, void>({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});

export const {useGetUsersQuery} = usersApiSlice;
