import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = (username, password) => {
        if (username === "DustReFore" && password === "adminpass") {
            setUser({ username, role: "admin" });
        } else {
            setUser({ username, role: "user" });
        }
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}