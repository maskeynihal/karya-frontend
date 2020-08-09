import React from 'react';
import PropTypes from 'prop-types';
import { Button, Fab } from 'ui-neumorphism';
import { RiAddLine } from 'react-icons/ri';
import { ShowTaskModal } from 'Components/common/modal';
import { useModal } from 'Hooks';
/**
 * Heading of the page
 * Has Heading with Add new task button.
 */
function PageHeading({ heading }) {
  const { isShowing, toggle } = useModal();

  return (
    <div className="heading">
      <div className="heading__container">
        <div className="heading__title">{heading}</div>
        <div className="heading__actions">
          <Button rounded={true} className="bg-secondary" onClick={() => toggle('InputCard', 1)}>
            <div className="button button__with-icon">
              <div className="icon button__icon button__icon--right">
                <RiAddLine></RiAddLine>
              </div>
              <div className="text button__text">Add Task</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

PageHeading.propTypes = {
  heading: PropTypes.string
};

export default PageHeading;
