import { ApiService } from "./api";


const url:string = "https://openai-voice-app.onrender.com";
export const apiService:ApiService = new ApiService(`${url}`)