import React, { useState } from 'react';
import { useCart } from '../../../data/CartContext';
import './OrderSummary.scss';
import emptyCartImage from '../../../assets/images/illustration-empty-cart.svg';
import Modal from '../../Modal/Modal';

function OrderSummary() {
  const { cartItems, removeItemFromCart, resetCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0)
      .toFixed(2);
  };

  const handleConfirmOrder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='order-summary-container'>
      <header className='order-summary-header'>
        <p className='order-summary-title'>
          {`Your Cart (${cartItems.length})`}
        </p>
      </header>

      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <img src={emptyCartImage} alt="Empty Cart" className='empty-cart-image' />
          <p className='empty-cart-message'>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className='order-summary-items'>
            {cartItems.map(item => {
              const itemTotalPrice = (item.price || 0) * (item.quantity || 0);
              return (
                <li key={item.name} className='order-summary-item'>
                  <div className="order-summary-item-details">
                    <div className="order-summary-item-info">
                      <span className="order-summary-item-name">{item.name}</span>
                      <div className="order-summary-item-quantity">
                        <span className='order-summary-item-quantity-x'>{item.quantity || 0}x</span> &nbsp;
                        <span className='order-summary-item-quantity-dollar'>
                          @${(item.price || 0).toFixed(2)}
                        </span>
                        <span className='order-summary-item-total'>
                          &nbsp; ${(itemTotalPrice).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button 
                      className="remove-item-button" 
                      onClick={() => removeItemFromCart(item.name)}
                    >
                      <img src='/assets/images/icon-remove-item.svg' alt="Remove" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className='order-summary-total'>
            Order Total <span className='order-summary-total-getTotalPrice'>${getTotalPrice()}</span>
          </p>

          <div className='carbon-neutral-delivery-container'>
            <p className='carbon-neutral-delivery-message'>
              <img src='/assets/images/icon-carbon-neutral.svg' alt="Carbon Neutral" />
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>

          <button className='confirm-order-button' onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </>
      )}

      {showModal && (
        <Modal 
          cartItems={cartItems} 
          totalPrice={getTotalPrice()} 
          onClose={handleCloseModal} 
          resetCart={() => {
            resetCart();
            handleCloseModal();
          }} 
        />
      )}
    </div>
  );
}

export default OrderSummary;
