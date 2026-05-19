import React from 'react'
import { useState,useContext } from 'react';
import NotesContext from '../context/NotesContext';

const NoteCard = () => {
  const { topic, difficulty } = useContext(NotesContext);

  return (
    <div className="bg-slate-800 p-6 rounded-2xl hover:scale-[1.02] hover:shadow-2xl transition duration-300">
        <h2 className="text-2xl font-bold mb-4">
            {topic || "Your Notes Will Appear Here"}
        </h2>

        <p className="text-slate-300 leading-8">
           {topic
  ? `Difficulty Level: ${difficulty}`
  : "Enter a topic to generate notes"}
        </p>
      
    </div>
  )
}

export default NoteCard;
