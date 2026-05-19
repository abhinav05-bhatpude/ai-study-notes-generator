import { createContext,useState } from "react";

const NotesContext=createContext();

export const NotesProvider = ({children}) => {
    
    const [topic,setTopic] = useState("");

    const [difficulty,setDifficulty] = useState("Beginner");

    const [notes, setNotes] = useState("");

    const [loading,setLoading] = useState(false);

    return (
        <NotesContext.Provider
        value={{
            topic,
            setTopic,
            difficulty,
            setDifficulty,
            notes,
            setNotes,
            loading,
            setLoading,
        }}
        >
            {children}

        </NotesContext.Provider>
    );

};

export default NotesContext;

