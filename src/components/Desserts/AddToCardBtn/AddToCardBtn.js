import React, { useState, useEffect } from 'react';
import { useCart } from '../../../data/CartContext';
import './AddToCardBtn.scss';

function AddToCardBtn({ dessert }) {
  const { cartItems, addItemToCart, removeItemFromCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const itemInCart = cartItems.find(item => item.name === dessert.name);
    setQuantity(itemInCart ? itemInCart.quantity : 0);
  }, [cartItems, dessert.name]);

  const handleAddClick = () => {
    if (quantity === 0) {
      addItemToCart({ ...dessert, quantity: 1 });
      setQuantity(1);
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addItemToCart({ ...dessert, quantity: newQuantity });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      addItemToCart({ ...dessert, quantity: newQuantity });
    } else {
      setQuantity(0);
      removeItemFromCart(dessert.name);
    }
  };

  return (
    <div className="add-to-card">
      {quantity === 0 ? (
        <button onClick={handleAddClick} className="add-to-card-button">
          <img src='/assets/images/icon-add-to-cart.svg' alt="Add to Cart" />
          Add to Cart
        </button>
      ) : (
        <div className="quantity-controls">
          <button onClick={handleDecrement} className="decrement-button">
            <img src='/assets/images/icon-decrement-quantity.svg' alt="Decrement" />
          </button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={handleIncrement} className="increment-button">
            <img src='/assets/images/icon-increment-quantity.svg' alt="Increment" />
          </button>
        </div>
      )}
    </div>
  );
}

export default AddToCardBtn;
