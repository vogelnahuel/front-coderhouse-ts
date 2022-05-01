
import { AxiosResponse } from "axios";
import * as API from "./api";

export const postLogin = (): Promise<AxiosResponse<any>> => API.get("/api/productos"); 