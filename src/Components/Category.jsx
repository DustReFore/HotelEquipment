import { useParams } from "react-router-dom";
import "../Styles/Category.css";

import wardrobe3doorImage from "../Assets/CategoryAssets/wardrobe-3door.jpg";
import wardrobe3doorWithHandleImage from "../Assets/CategoryAssets/wardrobe-3door-handle.jpg";
import wardrobe2doorImage from "../Assets/CategoryAssets/wardrobe-2door.jpg";
import wardrobe2doorWithHandleImage from "../Assets/CategoryAssets/wardrobe-2door-handle.jpg";

const categoryData = {
    furniture: {
        title: "КОРПУСНАЯ МЕБЕЛЬ",
        description: "Шкафы, тумбы, столы, ТВ‑стойки и другие элементы интерьера.",
        items: [
            {
                name: "Шкаф 3-х дверный",
                size: "1200 x 600 x 2200 мм",
                image: wardrobe3doorImage
            },
            {
                name: "Шкаф 3-х дверный с ручкой профиль",
                size: "1200 x 450 x 2050 мм",
                image: wardrobe3doorWithHandleImage
            },
            {
                name: "Шкаф 2-х дверный",
                size: "800 х 600 х 2050 мм",
                image: wardrobe2doorImage
            },
            {
                name: "Шкаф 2-х дверный с ручкой профиль",
                size: "900 x 450 x 2050 мм",
                image: wardrobe2doorWithHandleImage
            },
        ],
    },
};

function Category() {
    const { category } = useParams();
    const current = categoryData[category];

    if (!current) {
        return <div>Категория не найдена</div>;
    }

    return(
        <div className="category-container">
            <h1>{current.title}</h1>
            <p>{current.description}</p>
            <div className="category-grid">
                {current.items.map((item, index) => (
                    <div key={index} className="category-card">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Размер: {item.size}</p>
                        <div className="category-actions">
                            <label>
                                Кол-во:
                                <input type="number" min="1" defaultValue="1"/>
                            </label>
                            <button>В КОРЗИНУ</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;