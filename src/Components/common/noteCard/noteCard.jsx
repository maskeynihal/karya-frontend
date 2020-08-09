import React from 'react';
import PropTypes from 'prop-types';

import { Card as NeuCard, Avatar } from 'ui-neumorphism';

/**
 * Task Note Card.
 */
function NoteCard({ avatar, description, ...props }) {
  return (
    <React.Fragment>
      <NeuCard className="card note-card row-group justify-space-between">
        <Avatar className="note-card__avatar">{avatar}</Avatar>
        <div className="note-card__description">{description}</div>
      </NeuCard>
    </React.Fragment>
  );
}

NoteCard.defaultProps = {
  avatar: 'NM',
  description: 'This is where you can add note to the task'
};

NoteCard.propTypes = {
  avatar: PropTypes.string,
  description: PropTypes.string,
  props: PropTypes.object
};

export default NoteCard;
