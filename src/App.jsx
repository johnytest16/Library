import { config } from "dotenv"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { useLibrary } from "./store/useLibrary"
import { useEffect } from "react";
export default function App() {
  const {fetchBooks}=useLibrary();
  useEffect(
    ()=>{
      fetchBooks();
    },
    [fetchBooks]
  );
  return (
   <div className="w-144px h-144">
    
   </div>
  )
}