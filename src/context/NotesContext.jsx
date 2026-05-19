import { createContext,useState } from "react";

const NotesContext=createContext();

export const NotesProvider = ({children}) => {
    
    const [topic,setTopic] = useState("");

    const [difficulty,setDifficulty] = useState("Beginner");

    return (
        <NotesContext.Provider
        value={{
            topic,
            setTopic,
            difficulty,
            setDifficulty,
        }}
        >
            {children}

        </NotesContext.Provider>
    );

};

export default NotesContext;

