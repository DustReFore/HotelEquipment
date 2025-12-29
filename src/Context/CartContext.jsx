import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider( {children} ) {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity = 1) => {
        setCart(prev => {
            const existing = prev.find(p => p.name === item.name);
            if (existing) {
                return prev.map(p =>
                    p.name === item.name ? { ...p, quantity: p.quantity + quantity } : p
                );
            }
            return [...prev, { ...item, quantity }];
        });
    };

    const removeFromCart = (name) => {
        setCart(prev => prev.filter(item => item.name !== name));
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}