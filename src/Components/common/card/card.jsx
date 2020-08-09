import React from 'react';
import PropTypes from 'prop-types';

import { Card as NeuCard, Button, Avatar } from 'ui-neumorphism';
import { useModal } from 'Hooks';

/**
 * Card.
 */
function Card({ rounded, title, dueDate, username, action, ...props }) {
  return (
    <React.Fragment>
      <NeuCard rounded={rounded}>
        <div className="card__container">
          <div className="card__heading">{title}</div>
          <div className="card__due-date">
            <NeuCard inset className="card__date">
              {dueDate}
            </NeuCard>
          </div>
          <div className="card__footer">
            <div className="card__action">
              <Button text color="var(--primary)" onClick={action}>
                Details
              </Button>
              <Avatar>{username}</Avatar>
            </div>
          </div>
        </div>
      </NeuCard>
    </React.Fragment>
  );
}

Card.defaultProps = {
  rounded: false,
  title: 'Complete React TODO',
  dueDate: new Date().toLocaleDateString(),
  username: 'NM'
};

Card.propTypes = {
  rounded: PropTypes.bool,
  title: PropTypes.string,
  dueDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  username: PropTypes.string,
  action: PropTypes.func
};

export default Card;
