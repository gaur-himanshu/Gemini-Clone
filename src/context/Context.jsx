import { createContext, useState } from "react";
import runChat from "../config/gemini";
export const Context = createContext();

export default function ContextProvider(props) {

    const [input, setInput] = useState("");
    const [recentprompt, setRecentPrompt] = useState("");
    const [previousPrompts, setPreviousPrompts] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");


    const onSent = async (prompt) => {
        await runChat(prompt);
    }
    
    const contextValue = {
        
    }
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
}