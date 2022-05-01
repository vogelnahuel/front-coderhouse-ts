// import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import login from "./login";

const rootReducer = () =>
combineReducers({
  login,
});

export default rootReducer;