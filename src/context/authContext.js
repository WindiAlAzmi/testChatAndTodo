import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export const AuthContextChat = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      onAuthStateChanged(auth, (dataAuth) => {
        setUser(dataAuth);
          console.log(dataAuth, 'ini user di context');
        setLoading(false);
      })   
    }, []);

    if(loading){
        return "loading..";
    }
    
    return (
        <AuthContextChat.Provider value={{ user }}>{children}</AuthContextChat.Provider>
    )
} 

export default AuthProvider;