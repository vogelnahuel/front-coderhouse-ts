// import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import cart from "./cart";
import dashboard from "./dashboard";
import login from "./login";
import notification from "./notification";
import product from "./product";

const rootReducer = () =>
combineReducers({
  login,
  dashboard,
  product,
  cart,
  notification
});

export default rootReducer;