import React from 'react';
import { useCart } from '../../../data/CartContext';
import './OrderSummary.scss';

function OrderSummary() {
	const { cartItems } = useCart();
  
	const getTotalPrice = () => {
	  return cartItems.reduce((total, item) => {
		return total + (item.price || 0) * (item.quantity || 0);
	  }, 0).toFixed(2);
	};
  
	return (
	  <div className='order-summary-container'>
		<header className='order-summary-header'>
		  <p className='order-summary-title'>Your Cart ({cartItems.length})</p>
		</header>
  
		<div className='carbon-neutral-delivery-container'>
		  <p className='carbon-neutral-delivery-message'>
			<img src='/assets/images/icon-carbon-neutral.svg' alt="Carbon Neutral" />
			This is a <strong>carbon-neutral</strong> delivery
		  </p>
		</div>
  
		<ul className='order-summary-items'>
		  {cartItems.map(item => (
			<li key={item.id} className='order-summary-item'>
			  {item.name} - {item.quantity || 0} x ${item.price || 0}
			</li>
		  ))}
		</ul>
  
		<p className='order-summary-total'>Total: ${getTotalPrice()}</p>
  
		<button className='confirm-order-button'>Confirm Order</button>
	  </div>
	);
  }
  
  export default OrderSummary;