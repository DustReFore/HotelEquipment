import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CatalogPage from "./Pages/CatalogPage";
import AboutPage from "./Pages/AboutPage";
import InformationPage from "./Pages/InformationPage";
import ContactPage from "./Pages/ContactPage";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/information" element={<InformationPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/catalog/:category" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;