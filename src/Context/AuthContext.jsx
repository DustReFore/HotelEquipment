import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([
        { username: "DustReFore", password: "adminpass", role: "admin" },
    ]);

    const login = (username, password) => {
        const foundUser = users.find(
        (u) => u.username === username && u.password === password
        );
        if (foundUser) {
            setUser({ username: foundUser.username, role: foundUser.role });
        } else {
            alert("Неверные данные для входа!");
        }
    };

    const register = (username, password) => {
        // проверяем, есть ли уже такой пользователь
        const exists = users.find((u) => u.username === username);
        if (exists) {
            alert("Такой пользователь уже существует!");
            return;
        }

        // добавляем нового пользователя с ролью user
        const newUser = { username, password, role: "user" };
        setUsers([...users, newUser]);
        setUser({ username, role: "user" });
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}