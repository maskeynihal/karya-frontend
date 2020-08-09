import React from 'react';
import { Card as NeuCard, Button } from 'ui-neumorphism';
import { useDispatch } from 'react-redux';
import { authActions } from 'Redux/actions';

/**
 * Dropdown for avatar click on navbar.
 *
 * @param props
 */
function NavbarDropDown(props) {
  const dispatch = useDispatch();

  return (
    <NeuCard className="navbar-dropdown" dark elevation={1}>
      <Button
        text
        onClick={() => {
          dispatch(authActions.logout());
          props.onClick();
        }}
      >
        Logout
      </Button>
    </NeuCard>
  );
}

export default NavbarDropDown;
