import React from 'react';
import ReactDOM from 'react-dom';
import { Card as NeuCard, IconButton } from 'ui-neumorphism';

import { AiOutlineClose } from 'react-icons/ai';
/**
 * Modal to be used to show task.
 */
function Modal({ isShowing, hide, ...props }) {
  if (!isShowing) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__container">
        <NeuCard inset className="modal__content">
          <div className="modal__action-bar">
            <IconButton size="large" color="var(--error)" onClick={hide}>
              <AiOutlineClose size={36}></AiOutlineClose>
            </IconButton>
          </div>
          <div className="modal__body">{props.children}</div>
        </NeuCard>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
