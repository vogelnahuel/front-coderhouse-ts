import { NavigateFunction } from "react-router-dom";

export type createUserTypes  = {
    isFetching: boolean;
    validationSchema:any;
    navigate: NavigateFunction;
    postCreateUser:(params:any,navigate:NavigateFunction)=>void;
}
export type ContainercreateUserTypes  = {
    isFetching: boolean;
    postCreateUser:(params:any,navigate:NavigateFunction)=>void;
}