import { BrowserRouter,Routes,Route } from "react-router-dom"
import { useLibrary } from "./store/useLibrary"
import { useEffect } from "react";
export default function App() {
  const {fetchBooks}=useLibrary();
  const handleSearch= async ()=>{
    fetchBooks();
  }
  return (
   <div className="w-144px h-max bg-black text-white">
    <button onClick={handleSearch}>click</button>
   </div>
  )
}