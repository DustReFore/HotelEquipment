import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";
import HomePage from "./Pages/HomePage";
import CatalogPage from "./Pages/CatalogPage";
import AboutPage from "./Pages/AboutPage";
import InformationPage from "./Pages/InformationPage";
import ContactPage from "./Pages/ContactPage";
import CategoryPage from "./Pages/CategoryPage";
import CartPage from "./Pages/CartPage"
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminPanel from "./Components/AdminPanel";

import "./Styles/Cart.css";

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/information" element={<InformationPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/catalog/:category" element={<CategoryPage />} />
                    <Route path="/cart" element={<CartPage />}></Route>
                    <Route path="/admin" element={
                        <ProtectedRoute requiredRole="admin">
                            <AdminPanel />
                        </ProtectedRoute>
                        }
                    />
                </Routes>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;