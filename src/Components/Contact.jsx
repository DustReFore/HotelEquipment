import "../Styles/Contact.css";

function Contact() {
    return (
        <div className="contact-container">
            <h1>КОНТАКТЫ</h1>
            <div className="contact-grid">
                <div className="contact-info">
                <h2>ЦЕНТРАЛЬНЫЙ ОФИС И ФИЛИАЛЫ</h2>
                <p><strong>📞 ЕДИНЫЙ НОМЕР:</strong> 8 800 100 8770</p>
                <p><strong>📞 ОТДЕЛ ПРОДАЖ:</strong> +7 861 293 00 01</p>
                <p><strong>АДРЕС:</strong> 350051, г. Краснодар, ул. Стахановская, д. 3</p>
                <p><strong>EMAIL:</strong> Belgrade@HotelEquipment.rs</p>
                <button className="contact-button">ЗАКАЗАТЬ ЗВОНОК</button>
                </div>

                <div className="contact-form">
                    <h2>ОБРАТНАЯ СВЯЗЬ</h2>
                    <form>
                        <input type="text" placeholder="Ваше имя" required />
                        <input type="email" placeholder="Email" required />
                        <input type="tel" placeholder="Телефон" />
                        <textarea placeholder="Ваше сообщение" rows="5" required></textarea>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>

            <div className="contact-map">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11319.862380231833!2d20.442137409626312!3d44.82226554661899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab4f7ba19a5%3A0x29bdf885da51d1b2!2z0JrQsNC70LXQvNC10LPQtNCw0L0!5e0!3m2!1sru!2srs!4v1766760474799!5m2!1sru!2srs"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;