import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from 'Redux/actions';
/**
 * Hooks for toggling modal.
 *
 * @param modalComponent
 * @param id
 */
const useModal = () => {
  const dispatch = useDispatch();
  const isShowing = useSelector((state) => state.modal.isShowing);

  const toggle = (modalComponent = null, id = null) => {
    dispatch(modalActions.toggleModal(isShowing, modalComponent, id));
  };

  return {
    isShowing,
    toggle
  };
};

export default useModal;
