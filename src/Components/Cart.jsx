import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "../Styles/Cart.css";


function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    if (cart.length === 0) return <h2>Корзина пуста</h2>;

    return (
        <div className="cart-container">
            <h1>КОРЗИНА</h1>
            {cart.map((item, index) => (
                <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                        <h3>{item.name}</h3>
                        <p>Размер: {item.size}</p>
                        <p>Количество: {item.quantity}</p>
                    </div>
                    <button className="remove" onClick={() => removeFromCart(item.name)}>УДАЛИТЬ</button>
                </div>
            ))}
            <button className="clear-cart" onClick={clearCart}>ОЧИСТИТЬ КОРЗИНУ</button>
        </div>
    )
}

export default Cart;