import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
   <nav className="flex justify-between items-center mb-10">

    <h1 className="text-red-500 text-3xl font-bold">
     AI Notes Generator 🤖
    </h1>

<p className="text-slate-400 text-sm">
  Powered by Gemini AI
</p>
    <div className="flex gap-6 text-white">
    
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </div>

   </nav>
  )
}

export default Navbar;
