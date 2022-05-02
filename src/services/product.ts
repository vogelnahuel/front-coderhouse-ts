
import { AxiosResponse } from "axios";
import * as API from "./api";
export const getProduct = (id:string): Promise<AxiosResponse<any>> => API.get(`/api/productos/${id}`);
export const getProducts = (): Promise<AxiosResponse<any>> => API.get(`/api/productos/`);
export const updateProduct = (id:string,data:any): Promise<AxiosResponse<any>> => API.put(`/api/productos/${id}`,data);  
export const createProduct = (data:any): Promise<AxiosResponse<any>> => API.post("/api/productos/",data); 
export const deleteProducts = (id:string): Promise<AxiosResponse<any>> => API.remove(`/api/productos/${id}`); 
