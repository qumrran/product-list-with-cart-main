
import './Modal.scss';

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="modal-header">Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
        <ul className="modal-item-list">
          <li className="modal-item">Item 1</li>
          <li className="modal-item">Item 2</li>
          <li className="modal-item">Item 3</li>
        </ul>

        <p>
          Order Total <span>$46.50</span>
        </p>
        <button className="modal-close" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;
