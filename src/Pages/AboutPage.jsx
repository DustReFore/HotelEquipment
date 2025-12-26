import Navbar from "../Components/Navbar";
import "../Styles/AboutPage.css";
import aboutImage from "../Assets/about.jpg"; // добавь картинку в папку Assets

function AboutPage() {
  return (
    <div>
      <Navbar />
      <section className="about-hero">
        <h1>О КОМПАНИИ</h1>
        <p>
          Мы специализируемся на комплексном оснащении гостиниц, санаториев,
          учебных заведений и объектов инфраструктуры. Наша цель — создавать
          пространства, которые превосходят ожидания гостей и клиентов.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Наша миссия</h2>
          <p>
            Мы стремимся к тому, чтобы каждый проект был уникальным и отражал
            индивидуальность заказчика. От дизайн‑проекта до установки мебели —
            мы сопровождаем клиента на каждом этапе.
          </p>

          <h2>Наши ценности</h2>
          <ul>
            <li>✔ Качество и надёжность</li>
            <li>✔ Современный дизайн</li>
            <li>✔ Индивидуальный подход</li>
            <li>✔ Полный цикл работ «под ключ»</li>
          </ul>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="О компании" />
        </div>
      </section>
    </div>
  );
}

export default AboutPage;