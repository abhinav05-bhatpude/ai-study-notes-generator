import React from 'react'
import NoteForm from '../components/NoteForm'
import NoteCard from '../components/NoteCard'

const Home = () => {
  return (
   <div className="flex flex-col items-center justify-center text-center mt-20">
    <h1 className="text-white text-5xl font-bold mb-6">
AI Study Notes Generator 📚
    </h1>

    <p className="text-slate-400 text-lg max-w-2xl">
Generate smart study notes using AI and improve your learning experience.
    </p>

  <div className="mt-10 w-full flex justify-center">
  <NoteForm />
</div>
<NoteCard title="Recursion Notes" content="Recursion is a programing technique where a function calls itself repeatedly to solve a problem."/>
   </div>
  )
}

export default Home
