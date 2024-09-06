import './Modal.scss';
import iconConfirmed from '../../assets/images/icon-order-confirmed.svg';

function Modal({ cartItems, totalPrice, onClose, resetCart }) {

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={iconConfirmed}/>
        <h1 className="modal-header">Order Confirmed</h1>
        <p className='modal-thank-you-message'>We hope you enjoy your food!</p>
        <ul className="modal-item-list">
          {cartItems.map((item, index) => (
            <li key={index} className="modal-item">
              <div className="modal-item-content">
                <img 
                  src={item.image.thumbnail} 
                  alt={item.name} 
                  className="modal-item-image" 
                />
                <div className='modal-item-description-container'>
                  <span className="modal-item-description-text">
                    {item.name}
                  </span>
                  <div className='modal-item-description-price-container'>
                    <span>{item.quantity}x</span> 
                    <span>@ ${item.price.toFixed(2)}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>

                    
                    </div>
                </div>
              </div>
            
            </li>
            
          ))}
            <p className='modal-item-total-price'>
               Order Total: <span>${totalPrice}</span>
        </p>
        </ul>

        
        <button
          className="modal-close"
          onClick={() => {
            resetCart(); 
            onClose(); 
          }}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;
