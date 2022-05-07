
import { AxiosResponse } from "axios";
import * as API from "./api";
export const createCartServices = (data:any): Promise<AxiosResponse<any>> => API.post("/api/carrito",{idUser:data}); 
export const deleteCart = (id:string): Promise<AxiosResponse<any>> => API.remove(`/api/carrito/${id}`);
export const getCart = (id:string): Promise<AxiosResponse<any>> => API.get(`/api/carrito/${id}/productos`);
export const addProductCart = (id:string,data:any): Promise<AxiosResponse<any>> => API.post(`/api/carrito/${id}/productos`,{idCart:data});
export const deleteProductCart = (idCart:string,idProd:string): Promise<AxiosResponse<any>> => API.remove(`/api/carrito/${idCart}/productos/${idProd}`);
