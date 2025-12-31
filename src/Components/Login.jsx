import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

function Login({ isOpen, onClose }) {
    const { login, user } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    if (!isOpen) return null; // если окно закрыто, ничего не рендерим

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password); // вызываем AuthContext.login
        onClose(); // закрываем модалку после входа

        if (user?.role === "admin") {
            navigate("/admin");
        } else {
            navigate("/"); // перенаправляем на главную страницу
        }
    };

    return (
        <div className="login-overlay">
            <div className="login-modal">
                <button className="login-close" onClick={onClose}>×</button>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">LOG IN</button>
                </form>
            </div>
        </div>
    );
}

export default Login;