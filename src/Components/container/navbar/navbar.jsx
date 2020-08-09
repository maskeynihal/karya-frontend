import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'logo.svg';
import { Card, Button, TextField, Avatar, Divider, H3 } from 'ui-neumorphism';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import NavbarDropDown from './navbarDropdown';
import { useSelector } from 'react-redux';
/**
 * Navbar.
 */
function Navbar() {
  const [isShowing, setIsShowing] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.apiReducer);

  return (
    <React.Fragment>
      <div className="navbar">
        <Card className="navbar__container" flat>
          {isAuthenticated ? (
            <>
              <div className="row-group">
                <FiSearch></FiSearch>
                <TextField placeholder="SEARCH" hideExtra={true} name="search"></TextField>
              </div>
              <div className="row-group">
                <button
                  className="btn"
                  onClick={() => {
                    setIsShowing(!isShowing);
                  }}
                >
                  <Avatar src={logo}>NM</Avatar>
                </button>
              </div>
            </>
          ) : (
            <div className="row-group">
              <H3>Karya</H3>
            </div>
          )}

          {isShowing && <NavbarDropDown onClick={() => setIsShowing(!isShowing)}></NavbarDropDown>}
        </Card>
      </div>
      <Divider dense></Divider>
    </React.Fragment>
  );
}

export default Navbar;
