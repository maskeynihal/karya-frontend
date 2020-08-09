import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'Components/common/card';
import { useModal } from 'Hooks';
/**
 * Has stack of card of the definite works.
 *
 * @param {Object} props
 */
function CardStack(props) {
  // const { isShowing, toggle } = useModal();
  const { data } = props;

  return (
    <div>
      {/* {
          <div className="card-group__item">
            <Card rounded={true} action={() => toggle('LargeCard', 100)} title={todo.title}></Card>
          </div>;
        } */}
      <div className="card-stack__title">{props.title.toUpperCase()}</div>
      <div className="card-group">
        {data &&
          data.map((todo) => (
            <div className="card-group__item" key={todo.id || Math.random()}>
              <Card
                rounded={true}
                // action={() => toggle('LargeCard', 100)}
                action={() => props.action(todo.id)}
                title={todo.title}
                dueDate={todo.dueDate}
              ></Card>
            </div>
          ))}
        <div className="card-group__item">
          <Card rounded={false}></Card>
        </div>
      </div>
    </div>
  );
}

CardStack.defaultProps = {
  title: 'Todo'
};

CardStack.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  action: PropTypes.func
};
export default CardStack;
