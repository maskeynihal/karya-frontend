import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authActions } from 'Redux/actions';
import { TopNavbar } from 'Components/container/navbar';
import { ADMIN_ROLE_ID } from 'Constants/roles';
/**
 * Default Layout.
 *
 * @param {Object} props
 */
function DefaultLayout(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Row>
        <Col>
          <TopNavbar></TopNavbar>
        </Col>
      </Row>
      <div className="row mt-2">
        <div className="col-3">
          <ul className="list-group">
            {user.role === ADMIN_ROLE_ID && (
              <Link className="list-group-item" to={'/users'}>
                Users
              </Link>
            )}
            <Link className="list-group-item" to={'/projects'}>
              My Projects
            </Link>
            <Link className="list-group-item" to={'/tasks'}>
              My Task
            </Link>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(authActions.logoutUser());
                history.push('/login');
                // <Redirect to={{ pathname: '/projects' }}></Redirect>;
              }}
            >
              LOGOUT
            </button>
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
