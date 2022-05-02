
import { AxiosResponse } from "axios";
import * as API from "./api";

export const postLogin = (data:any): Promise<AxiosResponse<any>> => API.post("/api/users/login",data); 
export const postUserCreate = (data:any): Promise<AxiosResponse<any>> => API.post("/api/users/create",data); 
export const postUserBuy = (data:any): Promise<AxiosResponse<any>> => API.post("/api/users/buy",data); 
