import { ApiService } from "./api";


const url:string = "http://localhost:4000";
export const apiService:ApiService = new ApiService(`${url}`)