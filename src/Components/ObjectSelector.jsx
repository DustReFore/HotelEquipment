import { useState } from "react";
import "../Styles/ObjectSelector.css";

import hotelImage from "../Assets/hotel.jpg";
import infrastructureImage from "../Assets/infrastructure.jpg";
import educationImage from "../Assets/education.jpg";
import resortImage from "../Assets/resort.jpg";

function ObjectSelector() {
    // изначально активна вкладка "ГОСТИНИЦЫ"
    const [active, setActive] = useState("hotels");

    const sections = {
        hotels: {
            title: "ОСНАЩАЕМ ГОСТИНИЦЫ ЛЮБОГО КЛАССА",
            content: [
                "→ Дизайн-проект",
                "→ Пилотный номер",
                "→ Ремонт и отделка",
                "→ Мебель",
                "→ Текстиль и прочее",
            ],
            image: hotelImage,
        },
        infrastructure: {
            title: "ОСНАЩАЕМ ОБЪЕКТЫ ИНФРАСТРУКТУРЫ",
            content: [
                "→ Оснащение ресепшенов",
                "→ Зоны ожидания",
                "→ Офисные помещения",
            ],
            image: infrastructureImage,
        },
        education: {
            title: "ОСНАЩАЕМ УЧЕБНЫЕ ЗАВЕДЕНИЯ",
            content: [
                "→ Аудитории",
                "→ Мебель для преподавателей",
                "→ Библиотеки и зоны отдыха",
            ],
            image: educationImage,
        },
        resorts: {
            title: "ОСНАЩАЕМ САНАТОРНО-КУРОРТНЫЕ ОБЪЕКТЫ",
            content: [
                "→ Номера отдыха",
                "→ Медицинские кабинеты",
                "→ Зоны релакса",
            ],
            image: resortImage,
        },
    };

    return (
        <div className="section-selector">
            <ul className="button-list">
                <li onClick={() => setActive("hotels")}>ГОСТИНИЦЫ</li>
                <li onClick={() => setActive("infrastructure")}>ОБЪЕКТЫ ИНФРАСТРУКТУРЫ</li>
                <li onClick={() => setActive("education")}>УЧЕБНЫЕ ЗАВЕДЕНИЯ</li>
                <li onClick={() => setActive("resorts")}>САНАТОРНО-КУРОРТНЫЕ ОБЪЕКТЫ</li>
            </ul>

            {active && (
                <div className="info-block">
                    <div className="info-text">
                        <h2>{sections[active].title}</h2>
                        <ul>
                            {sections[active].content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <img src={sections[active].image} alt={sections[active].title} className="info-image" />
                </div>
            )}
        </div>
    );
}

export default ObjectSelector;