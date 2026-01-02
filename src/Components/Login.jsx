import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

function Login({ isOpen, onClose }) {
    const { login, register, user } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegistering) {
            register(username, password);
            navigate("/");
        } else {
            login(username, password);
            if (user?.role === "admin") {
                navigate("/admin");
            }
            else {
                navigate("/");
                onClose();
            }
        }


    };

    return (
        <div className="login-overlay">
            <div className="login-modal">
                <button className="login-close" onClick={onClose}>×</button>
                <h2>{isRegistering ? "Register" : "Login"}</h2>
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
                    <button type="submit">{isRegistering ? "Register" : "Login"}</button>
                </form>
                <div className="login-switch">
                    { isRegistering ? (
                        <p>
                            Already have an account?{" "}
                            <button onClick={() => setIsRegistering(false)}>Login</button>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?{" "}
                            <button onClick={() => setIsRegistering(true)}>Register</button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;