import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'ui-neumorphism';
import { Navbar } from 'Components/container/navbar';

/**
 * Default Layout.
 *
 * @param {Object} props
 */
function DefaultLayout(props) {
  return (
    <div>
      <Card>
        <div className="main-container">
          <Navbar></Navbar>
          <div className="content__container">{props.children}</div>
        </div>
      </Card>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default DefaultLayout;
