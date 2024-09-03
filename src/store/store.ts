import {configureStore} from "@reduxjs/toolkit";
import {rtkApi} from "./rtkApi";
import {tableFiltersReducer} from "./slices/tableFiltersSlice";

export function createReduxStore() {
  return configureStore({
    reducer: {
      tableFilters: tableFiltersReducer,
      [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
}
