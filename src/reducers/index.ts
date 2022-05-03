// import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import cart from "./cart";
import dashboard from "./dashboard";
import login from "./login";
import product from "./product";

const rootReducer = () =>
combineReducers({
  login,
  dashboard,
  product,
  cart
});

export default rootReducer;