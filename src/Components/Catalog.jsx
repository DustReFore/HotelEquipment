import "../Styles/Catalog.css";
import bedImage from "../Assets/bed.jpg";
import carpetImage from "../Assets/carpet.jpg";
import doorsImage from "../Assets/doors.jpg";
import equipmentImage from "../Assets/equipment.jpg";
import furnitureImage from "../Assets/furniture.jpg";
import lampImage from "../Assets/lamp.jpg";
import postersImage from "../Assets/posters.jpg";
import textileImage from "../Assets/textile.jpg";

const catalogItems = [
  {
    title: "КОРПУСНАЯ МЕБЕЛЬ",
    image: furnitureImage,
    subitems: [],
  },
  {
    title: "СПАЛЬНОЕ МЕСТО",
    image: bedImage,
    subitems: ["Матрас", "Основание", "Топпер"],
  },
  {
    title: "ДЕКОРАТИВНЫЙ ТЕКСТИЛЬ",
    image: textileImage,
    subitems: [],
  },
  {
    title: "СВЕТИЛЬНИКИ",
    image: lampImage,
    subitems: ["Абажуры", "Black & White", "Light", "Slim"],
  },
  {
    title: "ПОСТЕРЫ И КАРТИНЫ",
    image: postersImage,
    subitems: [],
  },
  {
    title: "ДОП ОБОРУДОВАНИЕ",
    image: equipmentImage,
    subitems: [],
  },
  {
    title: "ДВЕРИ",
    image: doorsImage,
    subitems: [],
  },
  {
    title: "КОВРОЛИН",
    image: carpetImage,
    subitems: [],
  },
];

function Catalog() {
  return (
    <div className="catalog-page">
      <h1>КАТАЛОГ</h1>
      <div className="catalog-grid">
        {catalogItems.map((item, index) => (
          <div key={index} className="catalog-card">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            {item.subitems.length > 0 && (
              <ul>
                {item.subitems.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;