import React from 'react';
import ReactDOM from 'react-dom';
import { Card as NeuCard, IconButton } from 'ui-neumorphism';

import { LargeCard } from 'Components/common/card';
import { AiOutlineClose } from 'react-icons/ai';
/**
 * Modal to be used to show task.
 */
function ShowTaskModal({ isShowing, hide, component, ...props }) {
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
          <div className="modal__body">
            {props.children}
            {/* <component {...props}></component>
            <LargeCard elevation={0} {...props}></LargeCard> */}
          </div>
        </NeuCard>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default ShowTaskModal;
