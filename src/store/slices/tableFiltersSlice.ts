import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TableFiltersSchema {
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: TableFiltersSchema = {
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const tableFiltersSlice = createSlice({
  name: "tableFilters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        field: keyof TableFiltersSchema["filters"];
        value: string;
      }>,
    ) => {
      state.filters[action.payload.field] = action.payload.value;
    },
    resetFilters: () => initialState,
  },
});

export const {actions: tableFiltersActions} = tableFiltersSlice;
export const {reducer: tableFiltersReducer} = tableFiltersSlice;
