import React, { createContext, useState, useContext } from 'react';

// Tworzymy kontekst
const CartContext = createContext();

// Komponent Provider dla CartContext
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Dodawanie przedmiotu do koszyka
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Usuwanie przedmiotu z koszyka
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Customowy hook do używania kontekstu
export const useCart = () => useContext(CartContext);
