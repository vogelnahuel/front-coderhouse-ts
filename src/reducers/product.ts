import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { endsWithAny } from "../utils/endWithAny";
import { ProductState } from "./types/product";


export const initialState: ProductState = {
  fetching: false,
  product:[] ,
  productSelected:{}
};

const SLICE_NAME = "product";

const isRequestAction = (action: Action<string>) => {
  const { type } = action;
  return type.startsWith(SLICE_NAME) && type.endsWith("Request");
};

const isResponseAction = (action: Action<string>) => {
  const { type } = action;
  return type.startsWith(SLICE_NAME) && endsWithAny(type, ["Error", "Success"]);
};

export const productSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    getAllProductRequest: () => {

    },
    getAllProductSuccess: (
      state: ProductState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.product = payload;
    },
    getAllProductError: () => {},
    /////////////////////////
    getByIdProductRequest: (
      state:ProductState,
      action:PayloadAction<any> 
    ) => {},
    getByIdProductSuccess: (
      state: ProductState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.productSelected = payload;
    },
    getByIdProductError: () => {},
    /////////////////////////
    updateProductRequest: (
      state:ProductState,
      action:PayloadAction<any> 
    ) => {},
    updateProductSuccess: (
      state: ProductState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.product = payload;
    },
    updateProductError: () => {},
    ////////////////////////

    deleteProductRequest: (
      state:ProductState,
      action:PayloadAction<any> 
    ) => {},
    deleteProductSuccess: (
      state: ProductState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.product = payload;
    },
    deleteProductError: () => {},
    //////////////////////////
    createProductRequest: (
      state:ProductState,
      action:PayloadAction<any> 
    ) => {},
    createProductSuccess: (
      state: ProductState,
      action: PayloadAction<any>
    ) => {
      const { payload } = action;
      state.product = payload;
    },
    createProductError: () => {},

  },
  extraReducers: (builder) =>
    builder
      .addMatcher(isRequestAction, (state: ProductState) => {
        state.fetching = true;
      })
      .addMatcher(isResponseAction, (state: ProductState) => {
        state.fetching = false;
      }),
});

export const productSelector = (state: RootState) => state.product;

export const actions = productSlice.actions;

export default productSlice.reducer;