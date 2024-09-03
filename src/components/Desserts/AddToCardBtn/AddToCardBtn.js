import React, { useState } from 'react';
import { useCart } from '../../../data/CartContext';
import './AddToCardBtn.scss';

function AddToCardBtn({ dessert }) {
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCart();

  const handleAddClick = () => {
    addItemToCart({ ...dessert, quantity });
    setIsAdding(true);
    setQuantity(1); // Reset quantity after adding
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setIsAdding(false); // Reset state when quantity is zero
    }
  };

  return (
    <div className="add-to-card">
      {!isAdding ? (
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
