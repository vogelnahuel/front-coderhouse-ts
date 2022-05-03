import { NavigateFunction } from "react-router-dom";


export type LoginTypes = {
  login: any;
  isFetching: boolean;
  validationSchema:any;
  navigate: NavigateFunction;
  postLogin: (params:any,navigate: NavigateFunction)=>void;
};
export type LoginSchema ={
  password:string,
  email:string
}
export type LoginContainerTypes = {
  login: any;
  isFetching: boolean;
  postLogin: (params:any,navigate: NavigateFunction)=>void;
};