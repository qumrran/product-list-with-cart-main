import React, { createContext, useState, useContext } from 'react';

// Tworzymy kontekst
const CartContext = createContext();

// Komponent Provider dla CartContext
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Dodawanie przedmiotu do koszyka
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(i => i.name === item.name);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: item.quantity
        };
        return updatedItems;
      }
      return [...prevItems, item];
    });
  };

  // Usuwanie przedmiotu z koszyka
  const removeItemFromCart = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.name !== itemName)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Customowy hook do używania kontekstu
export const useCart = () => useContext(CartContext);
