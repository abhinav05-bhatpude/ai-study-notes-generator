import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react'

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
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