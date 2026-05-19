import { createContext,useState } from "react";

const NotesContext=createContext();

export const NotesProvider = ({children}) => {
    
    const [topic,setTopic] = useState("");

    const [difficulty,setDifficulty] = useState("Beginner");

    const [notes, setNotes] = useState("");

    const [loading,setLoading] = useState(false);

    const generateNotes = async () =>{
        setLoading(true);

        await new Promise((resolve) => 
            setTimeout(resolve,2000)
        );

        setNotes(`${topic} is an important topic studied at ${difficulty} level. These notes were generated using simulated AI response.`
  );
        setLoading(false);
    }

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
            generateNotes,
        }}
        >
            {children}

        </NotesContext.Provider>
    );

};

export default NotesContext;

