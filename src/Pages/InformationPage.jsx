import Navbar from "../Components/Navbar";
import "../Styles/InformationPage.css";

function InformationPage() {
  const infoItems = [
    {
      title: "Часто задаваемые вопросы",
      content: [
        "Как оформить заказ?",
        "Какие сроки поставки?",
        "Есть ли гарантия на продукцию?",
      ],
    },
    {
      title: "Документы и сертификаты",
      content: [
        "Сертификаты качества",
        "Лицензии",
        "Инструкции по эксплуатации",
      ],
    },
    {
      title: "Полезные советы",
      content: [
        "Как выбрать мебель для гостиницы",
        "Особенности ухода за текстилем",
        "Энергоэффективные решения для освещения",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="info-hero">
        <h1>ИНФОРМАЦИЯ</h1>
        <p>
          Здесь вы найдёте ответы на популярные вопросы, документы и полезные
          материалы для работы с нашей продукцией.
        </p>
      </section>

      <section className="info-content">
        {infoItems.map((item, index) => (
          <div key={index} className="info-card">
            <h2>{item.title}</h2>
            <ul>
              {item.content.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default InformationPage;