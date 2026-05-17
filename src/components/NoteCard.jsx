import React from 'react'

const NoteCard = () => {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl text-white max-w-2xl mt-10">
        <h2 className="text-2xl font-bold mb-4">
            Recursion Notes
        </h2>

        <p className="text-slate-300 leading-8">
             Recursion is a programming technique where a function calls itself
        repeatedly to solve a problem.
        </p>
      
    </div>
  )
}

export default NoteCard;
