import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ProfilePage.css";

function ProfilePage() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const HomeReturn = () => {
        navigate("/");
    };

    if (!user) {
        return (
            <div className="profile-container">
                <p>Please log in to view your profile.</p>
                <button onClick={HomeReturn}>HOME</button>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <h1>Welcome to your profile, {user.username}!</h1>
            <p>Your role: {user.role}</p>
            <button onClick={handleLogout}>LOGOUT</button>
        </div>
    );
}

export default ProfilePage;