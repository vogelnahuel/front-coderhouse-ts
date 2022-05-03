import { createSlice, Action } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { endsWithAny } from "../utils/endWithAny";
import { DashboardState } from "./types/dashboard";


export const initialState: DashboardState = {
  fetching: false
};

const SLICE_NAME = "cart";

const isRequestAction = (action: Action<string>) => {
  const { type } = action;
  return type.startsWith(SLICE_NAME) && type.endsWith("Request");
};

const isResponseAction = (action: Action<string>) => {
  const { type } = action;
  return type.startsWith(SLICE_NAME) && endsWithAny(type, ["Error", "Success"]);
};

export const cartSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(isRequestAction, (state: DashboardState) => {
        state.fetching = true;
      })
      .addMatcher(isResponseAction, (state: DashboardState) => {
        state.fetching = false;
      }),
});

export const dashboardSelector = (state: RootState) => state.login;

export const actions = cartSlice.actions;

export default cartSlice.reducer;