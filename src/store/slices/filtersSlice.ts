import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FiltersSchema {
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: FiltersSchema = {
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        field: keyof FiltersSchema["filters"];
        value: string;
      }>,
    ) => {
      state.filters[action.payload.field] = action.payload.value;
    },
    resetFilters: () => initialState,
  },
});

export const {actions: filtersActions} = filtersSlice;
export const {reducer: filtersReducer} = filtersSlice;
