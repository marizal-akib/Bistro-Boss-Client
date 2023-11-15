import { createContext, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [loading , setLoading] = useState(true);

    const autInfo ={
        user,
        loading
    }
    
    return (
        <AuthContext.Provider value={autInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;