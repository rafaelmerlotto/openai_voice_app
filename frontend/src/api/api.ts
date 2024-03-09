import { Text } from "../models/model";

export class ApiService{
    constructor(private readonly url: string){}

    async getText(text:string, voice: string): Promise<Text[] | null>{
        const res: Response = await fetch(`${this.url}/text`,{
            method: "POST",
            headers:{
                'content-type': 'application/json', 
            },
            body: JSON.stringify({text:text, voice:voice})
        
        })
        if(res.ok){
           return await res.json()  
        }
       return null
    }
}