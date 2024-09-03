import {configureStore} from "@reduxjs/toolkit";
import {rtkApi} from "./rtkApi";
import {filtersReducer} from "./slices/filtersSlice";

export function createReduxStore() {
  return configureStore({
    reducer: {
      filters: filtersReducer,
      [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
}
