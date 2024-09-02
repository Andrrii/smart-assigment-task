import {configureStore} from "@reduxjs/toolkit";
import {rtkApi} from "./rtkApi";

export function createReduxStore() {
  return configureStore({
    reducer: {
      [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
}
