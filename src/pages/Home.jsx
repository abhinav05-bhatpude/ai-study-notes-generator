import React from 'react'

const Home = () => {
  return (
   <div className="flex flex-col items-center justify-center text-center mt-20">
    <h1 className="text-white text-5xl font-bold mb-6">
AI Study Notes Generator 📚
    </h1>

    <p className="text-slate-400 text-lg max-w-2xl">
Generate smart study notes using AI and improve your learning experience.
    </p>

    <button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-xl text-white mt-10">
 Generate Notes
    </button>
   </div>
  )
}

export default Home
