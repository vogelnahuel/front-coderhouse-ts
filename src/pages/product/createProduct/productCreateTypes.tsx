import { NavigateFunction } from "react-router-dom";

export type ProductCreateTypes = {
  isFetching: boolean;
  validationSchema:any;
  navigate:NavigateFunction;
  createProduct:(params:any,navigate:NavigateFunction)=>void;
};
export type ContainerProductCreateTypes = {
  isFetching: boolean;
  createProduct:(params:any,navigate:NavigateFunction)=>void;
};
