import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "../Styles/AdminPanel.css";

function AdminPanel() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="admin-container">
        <h1>Админ-панель</h1>
        <p>Добро пожаловать, {user?.username}!</p>

        <div className="admin-actions">
            <button onClick={logout}>Выйти</button>
        </div>

        <div className="admin-content">
            <h2>Управление сайтом</h2>
            <ul>
            <li>Добавить новый товар</li>
            <li>Редактировать существующие товары</li>
            <li>Просмотреть заказы</li>
            <li>Управлять пользователями</li>
            </ul>
        </div>
        </div>
    );
}

export default AdminPanel;