import "../Styles/HomePage.css";
import Navbar from "../Components/Navbar";
import backgroundVideo from "../Assets/background.mp4";
import ObjectSelector from "../Components/ObjectSelector";

function HomePage() {
    return (
        <div>
            <section className="hero-section">
                <video autoPlay muted loop className="background-video">
                    <source src={backgroundVideo} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>

                <div className="overlay">
                    <Navbar />
                    <div className="hero-content">
                    <h1>ОСНАЩЕНИЕ ОТЕЛЕЙ ПОД КЛЮЧ</h1>
                    <p>Продажа мебели, доставка и установка</p>
                    </div>
                </div>
            </section>

            <section id="details" className="main-section">
                <h1>ОСНАЩЕНИЕ ЛЮБЫХ ОБЪЕКТОВ</h1>
                <ObjectSelector />
            </section>
        </div>
    );
}

export default HomePage;