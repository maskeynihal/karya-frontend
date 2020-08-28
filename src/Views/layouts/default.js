import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { TopNavbar } from 'Components/container/navbar';

/**
 * Default Layout.
 *
 * @param {Object} props
 */
function DefaultLayout(props) {
  return (
    <div>
      <Row>
        <Col>
          <TopNavbar></TopNavbar>
        </Col>
      </Row>
      <div className="row mt-2">
        <div className="col-3">
          <ul>
            <li>PROJECTS</li>
            <li>TASKS</li>
          </ul>
        </div>
        <div className="col-9">
          <div className="content__container">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default DefaultLayout;
