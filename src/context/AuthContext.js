import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()

    const logIn = (data) => {
        setUser({
            username: data.username,
            password: data.password
        })
    }

    const logOut = (data) => {
        setUser()
    }

    return (
        <AuthContext.Provider value={{
            user,
            logOut,
            logIn
        }}>
            {children}
        </AuthContext.Provider>
    )

}