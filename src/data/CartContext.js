import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

 
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

  // Resetowanie koszyka
  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}


export const useCart = () => useContext(CartContext);
