import React from 'react'
import { useContext } from 'react';
import NotesContext from '../context/NotesContext';

const NoteForm = () => {
 const {
  topic,
  setTopic,
  difficulty,
  setDifficulty,
  generateNotes,
  loading,
} = useContext(NotesContext);
  return (

    <div className="bg-slate-800 p-6 rounded-2xl w-full max-w-2xl">

      <input
        type="text"
        placeholder="Enter study topic..."
        className="w-full p-4 rounded-xl bg-slate-900 text-white outline-none mb-5"
        value={topic} onChange={(e) => setTopic(e.target.value)}
      />

      <select
        className="w-full p-4 rounded-xl bg-slate-900 text-white outline-none"
        value={difficulty} onChange={(e) => setDifficulty(e.target.value)}
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <button
        className="bg-red-500 hover:bg-red-600 disabled:bg-slate-600  transition px-6 py-3 rounded-xl text-white mt-6 w-full"
      onClick={generateNotes} disabled={loading}>
       {loading ? "Generating..." : "Generate Notes"}
      </button>

    </div>

  );
};

export default NoteForm;