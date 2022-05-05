import { NavigateFunction } from "react-router-dom";

export type ProductByIdTypes  = {
    isFetching: boolean;
    productSelected:any;
    validationSchema:any
    updateProduct:(params:any,navigate:NavigateFunction,id:string)=>void;
    deleteProduct:(id:string,navigate:NavigateFunction)=>void;
    navigate:NavigateFunction;
    id?:string
}
export type ContainerProductByIdTypes  = {
    isFetching: boolean;
    getById:(id:string)=>void;
    updateProduct:(params:any,navigate:NavigateFunction,id:string)=>void;
    deleteProduct:(id:string,navigate:NavigateFunction)=>void;
    productSelected:any;
}