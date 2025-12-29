import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import categoryData from "../Data/categoryData";

import "../Styles/Category.css";

function Category() {
    const { category } = useParams();
    const current = categoryData[category];
    const { addToCart } = useContext(CartContext);

    switch (current.id) {
        case 1:
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
                                        <input type="number" min="1" defaultValue="1" id={`qty-${index}`} />
                                    </label>
                                    <button
                                        onClick={() => {
                                            const qty = parseInt(document.getElementById(`qty-${index}`).value);
                                            addToCart(item, qty);
                                        }}
                                    >
                                        В КОРЗИНУ
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        case 2:
            return(
                <div className="category-info">
                    <h1>{current.title_1}</h1>
                    <img src={current.image} alt={current.title_1} />
                    <h2>{current.title_2}</h2>
                    <p>{current.description}</p>
                </div>
        )
        default:
            return <div>Категория не найдена</div>;
    }
}

export default Category;