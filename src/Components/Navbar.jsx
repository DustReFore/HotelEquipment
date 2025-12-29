import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Styles/Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">HOTEL EQUIPMENT</Link>
            </div>

            <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`navbar-center ${isOpen ? "open" : ""}`}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/catalog">CATALOG</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/information">INFORMATION</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/cart">CART</Link></li>
            </ul>

            {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)}></div>}

            <div className="navbar-right">
                <span>Belgrade@HotelEquipment.rs</span>
                <span>8 800 555 3535</span>
            </div>
        </nav>
    );
}

export default Navbar;