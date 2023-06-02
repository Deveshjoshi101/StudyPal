import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        {/* Your modal content */}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
