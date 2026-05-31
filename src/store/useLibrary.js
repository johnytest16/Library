import { create } from "zustand"
import axios from "axios"
export const useLibrary = create((set)=>({
    Books:"",
    fetchBooks: async()=>{
    try{ 
        console.log("Everything Vite sees:", import.meta.env);
        const response=await axios.get("https://api.linkpreview.net",{
            headers:{
                "X-Linkpreview-Api-Key":import.meta.env.VITE_API_KEY
                
            },
            params:{
                "q":"https://google.com"
            }
        })
        const bookData=response.data.description;
        set({Books:bookData})
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
 }
}))