import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { endsWithAny } from "../utils/endWithAny";
import { cartState } from "./types/cart";


export const initialState: cartState = {
  fetching: false,
  cartSelected:{}
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
    getcartRequest: (
      state:cartState,
      action:PayloadAction<any> 
    ) => {},
    getcartSuccess: (
      state: cartState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.cartSelected = payload;
    },
    getcartError: () => {},

    deleteCartRequest: (
      state:cartState,
      action:PayloadAction<any> 
    ) => {},
    deleteCartSuccess: (
      state: cartState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.cartSelected = payload;
    },
    deleteCartError: () => {},

    createCartRequest: (
      state:cartState,
      action:PayloadAction<any> 
    ) => {},
    createCartSuccess: (
      state: cartState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.cartSelected = payload;
    },
    createCartError: () => {},

    addProductCartRequest: (
      state:cartState,
      action:PayloadAction<any> 
    ) => {},
    addProductCartSuccess: (
      state: cartState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.cartSelected = payload;
    },
    addProductCartError: () => {},

    deleteProductCartRequest: (
      state:cartState,
      action:PayloadAction<any> 
    ) => {},
    deleteProductCartSuccess: (
      state: cartState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.cartSelected = payload;
    },
    deleteProductCartError: () => {},
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(isRequestAction, (state: cartState) => {
        state.fetching = true;
      })
      .addMatcher(isResponseAction, (state: cartState) => {
        state.fetching = false;
      }),
});

export const cartSelector = (state: RootState) => state.cart;

export const actions = cartSlice.actions;

export default cartSlice.reducer;