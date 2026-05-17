import React from 'react'

const NoteCard = (props) => {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl text-white max-w-2xl mt-10">
        <h2 className="text-2xl font-bold mb-4">
            {props.title}
        </h2>

        <p className="text-slate-300 leading-8">
           {props.content}
        </p>
      
    </div>
  )
}

export default NoteCard;
