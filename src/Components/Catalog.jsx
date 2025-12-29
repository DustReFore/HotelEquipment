import { Link } from "react-router-dom";
import "../Styles/Catalog.css";

import bedImage from "../Assets/bed.jpg";
import carpetImage from "../Assets/carpet.jpg";
import doorsImage from "../Assets/doors.jpg";
import equipmentImage from "../Assets/equipment.jpg";
import furnitureImage from "../Assets/furniture.jpg";
import lampImage from "../Assets/lamp.jpg";
import postersImage from "../Assets/posters.jpg";
import textileImage from "../Assets/textile.jpg";

function Catalog() {
  const categories = [
    { id: "furniture", name: "КОРПУСНАЯ МЕБЕЛЬ", image: furnitureImage, subitems: [] },
    { id: "bed", name: "СПАЛЬНОЕ МЕСТО", image: bedImage, subitems: ["Матрас", "Основание", "Топпер"] },
    { id: "textile", name: "ДЕКОРАТИВНЫЙ ТЕКСТИЛЬ", image: textileImage, subitems: [] },
    { id: "lamp", name: "СВЕТИЛЬНИКИ", image: lampImage, subitems: ["Абажуры", "Black & White", "Light", "Slim"] },
    { id: "posters", name: "ПОСТЕРЫ И КАРТИНЫ", image: postersImage, subitems: [] },
    { id: "equipment", name: "ДОП ОБОРУДОВАНИЕ", image: equipmentImage, subitems: [] },
    { id: "doors", name: "ДВЕРИ", image: doorsImage, subitems: [] },
    { id: "carpet", name: "КОВРОЛИН", image: carpetImage, subitems: [] }
  ];

  return (
    <div className="catalog">
      <h1>КАТАЛОГ</h1>
      <div className="catalog-grid">
        {categories.map(cat => (
          <Link key={cat.id} to={`/catalog/${cat.id}`} className="catalog-card">
            <div className="catalog-card-image">
              <img src={cat.image} alt={cat.name} />
            </div>
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Catalog;