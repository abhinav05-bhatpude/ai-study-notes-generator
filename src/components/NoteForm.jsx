import React from 'react'

const Noteform = () =>{
    return (
        <div className="bg-slate-800 p-6 rounded-2xl w-full max-w-2xl">
            <input type="text"
            placeholder="Enter study topic..." className="w-full p-4 rounded-xl bg-slate-900 text-white outline-none mb-5"/>

            <select className="w-full p-4 rounded-xl bg-slate-900 text-white outline-none">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
            <button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-xl text-white mt-6 w-full">
                Generate Notes
            </button>
        </div>
    )
}
export default NoteForm;