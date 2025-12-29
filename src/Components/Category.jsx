import { useParams } from "react-router-dom";
import "../Styles/Category.css";
import categoryData from "../Data/categoryData";

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
                    <div key={index} className="category-card">w
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