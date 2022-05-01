import { createSlice, PayloadAction, Action } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { endsWithAny } from "../utils/endWithAny";
import { LoginState } from "./types/login";

export const initialState: LoginState = {
  fetching: false,
  login: {},
};

const SLICE_NAME = "login";

const isRequestAction = (action: Action<string>) => {
  const { type } = action;
  return type.startsWith(SLICE_NAME) && type.endsWith("Request");
};

const isResponseAction = (action: Action<string>) => {
  const { type } = action;
  return type.startsWith(SLICE_NAME) && endsWithAny(type, ["Error", "Success"]);
};

export const loginSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    postLoginRequest: (
      state:LoginState,
      action:PayloadAction<any> 
    ) => {},
    postLoginSuccess: (
      state: LoginState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.login = payload;
    },
    postLoginError: () => {},
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(isRequestAction, (state: LoginState) => {
        state.fetching = true;
      })
      .addMatcher(isResponseAction, (state: LoginState) => {
        state.fetching = false;
      }),
});

export const loginSelector = (state: RootState) => state.login;

export const actions = loginSlice.actions;

export default loginSlice.reducer;