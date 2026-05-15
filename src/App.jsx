import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react'

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-slate-900 p-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>

      </Routes>
    </div>

    </BrowserRouter>
  )
}

export default App;