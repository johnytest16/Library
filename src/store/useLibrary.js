import { create } from "zustand"
import { config } from "dotenv"
import axios from "axios"
export const useLibrary = create((set)=>({
 Books:[],
 fetchBooks: async()=>{
    try{
        const response=await axios.get("https://api.bigbookapi.com/search-books",{
            params:{
                "query":"books about wizard",
                "api-key":"47e0c2f823cd47639a55e7f435bf973c"
            }
        })
        console.log(response);
        set({Books:response.data.books||[]})
        
    }
    catch(e){
        console.log(e);
    }
 }
}))