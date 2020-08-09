import React from 'react';
import PropTypes from 'prop-types';
import { Card as NeuCard, Avatar, Button } from 'ui-neumorphism';
import { NoteCard, NoteInput } from 'Components/common/noteCard';
import { useState } from 'react';
/**
 * Large Card.
 *
 * @param props
 */
function LargeCard({ rounded, title, subHeading, type, dueDate, author, typeColor, description, ...props }) {
  const [todoStatus, handleChangeType] = useState(type);

  return (
    <React.Fragment>
      <NeuCard rounded={rounded} {...props} className="large-card">
        <div className="large-card__container">
          <div className="large-card__heading">{title}</div>
          <div className="large-card__content">
            {/* <div className="large-card__sub-heading">{subHeading}</div> */}
            <div className="large-card__row row-group justify-space-between">
              <Button
                rounded={rounded}
                bgColor={typeColor}
                color={'#cfc'}
                className="large-card__button"
                onClick={() => {
                  handleChangeType(todoStatus === 'INCOMPLETE' ? 'COMPLETED' : 'INCOMPLETE');
                }}
              >
                {todoStatus}
              </Button>
              <Button rounded={rounded} className="large-card__type">
                {dueDate}
              </Button>
              <div className="large-card__button large-card__author">
                <Avatar>{author}</Avatar>
              </div>
            </div>

            <div className="row-group large-card__row justify-space-between">
              <div className="large-card__description">
                <div className="description">
                  <div className="description__heading">{'Description'}</div>
                  <div className="description__content">{description}</div>
                </div>
              </div>
            </div>
            <div className="row-group large-card__row justify-space-between">
              <div className="large-card__note">
                <div className="note">
                  <div className="note__heading">{'Notes'}</div>
                  <div className="note__group">
                    <div className="note__item">
                      <NoteCard></NoteCard>
                    </div>
                    <div className="note__item">
                      <NoteInput></NoteInput>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NeuCard>
    </React.Fragment>
  );
}

LargeCard.defaultProps = {
  rounded: true,
  title: 'Lets Complete Todos in 2 days',
  subHeading: 'Grind on 2 days',
  type: 'INCOMPLETE',
  dueDate: new Date().toLocaleString(),
  author: 'NM',
  typeColor: 'var(--primary)',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, recusandae doloremque! Quidem dolores numquam eligendi totam illo sequi alias, labore cumque nostrum. Tempora, illum. Numquam voluptatibus corrupti autem culpa cumque?'
};

LargeCard.propTypes = {
  rounded: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  subHeading: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dueDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  author: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  typeColor: PropTypes.string
};

export default LargeCard;
