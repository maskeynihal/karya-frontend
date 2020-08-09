import React from 'react';
import PropTypes from 'prop-types';
import { Card as NeuCard, Avatar, Button, TextField, TextArea, Alert } from 'ui-neumorphism';
import { AiOutlineSave } from 'react-icons/ai';
import { NoteCard, NoteInput } from 'Components/common/noteCard';
import { useFormInput, useForm, useModal, useAlert } from 'Hooks';
import { addTaskValidation } from 'Validators';
import { useDispatch } from 'react-redux';
import { todosActions, modalActions } from 'Redux/actions';
import { ADD_TODO_URL } from 'Constants/api';
import callApi from 'Services/callApi';
import { GoAlert } from 'react-icons/go';

const INITIAL_STATE = {
  title: '',
  type: '',
  dueDate: '',
  description: ''
};

/**
 * Large Card.
 *
 * @param {Object}props
 */
function InputCard({ rounded, title, type, dueDate, author, typeColor, description, ...props }) {
  const validation = addTaskValidation;
  const dispatch = useDispatch();
  const { isShowing, toggle } = useModal();
  const { alert, handleAlert } = useAlert({});
  const initialValue = { ...INITIAL_STATE, title, type, dueDate, description };

  const onSubmitForm = async (state) => {
    const data = state;

    try {
      const responseData = await callApi(ADD_TODO_URL, state);

      const responseType = responseData.error ? 'error' : 'success';

      handleAlert({ ...responseData.response, type: responseType });

      dispatch(todosActions.addTodo(data));
      toggle();
    } catch (error) {
      handleAlert({ message: 'Something went wrong', type: 'error' });
    }
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable, setInitialValues } = useForm(
    initialValue,
    validation,
    onSubmitForm
  );

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      {alert.message && (
        <div className="alert">
          <Alert type={alert.type} icon={<GoAlert />}>
            {alert.message}
          </Alert>
        </div>
      )}
      <form onSubmit={handleOnSubmit}>
        <NeuCard elevation={0} rounded={rounded} {...props} className="input-card">
          <div className="input-card__container">
            <div className="input-card__topbar">
              <TextField
                rounded={rounded}
                color={'#cfc'}
                style={{ margin: 0 }}
                className="input-card__heading"
                prepend={'Title'}
                placeholder={'Enter title'}
                name="title"
                value={values.title}
                onChange={handleOnChange}
              ></TextField>
              {errors.title && dirty.title && <p className="error">{errors.title}</p>}
              <Button className="bg-success" rounded htmlType="submit" disabled={disable}>
                <div className="button button__with-icon">
                  <div className="icon button__icon button__icon--right">
                    <AiOutlineSave></AiOutlineSave>
                  </div>
                  <div className="text button__text">Save Task</div>
                </div>
              </Button>
            </div>
            <div className="input-card__content">
              <div className="input-card__row row-group justify-space-between">
                <TextField
                  rounded={rounded}
                  placeholder={'Enter Type'}
                  style={{ margin: 0 }}
                  color={'#cfc'}
                  prepend={'Type'}
                  className="input-card__type"
                  value={values.type}
                  name="type"
                  onChange={handleOnChange}
                ></TextField>
                <TextField
                  rounded={rounded}
                  prepend={'Due Date'}
                  type={'date'}
                  style={{ margin: 0 }}
                  className="input-card__due-date"
                  name="dueDate"
                  value={values.dueDate}
                  onChange={handleOnChange}
                ></TextField>
                <div className="input-card__button input-card__author">
                  <Avatar>{author}</Avatar>
                </div>
              </div>
              <div className="row-group input-card__row justify-space-between">
                <div className="input-card__description">
                  <div className="description">
                    <div className="description__heading">{'Description'}</div>
                    <TextArea
                      autoExpand
                      inputStyles={{ width: '100%' }}
                      className="description__body"
                      placeholder="Add Description"
                      height={80}
                      value={values.description}
                      name="description"
                      onChange={handleOnChange}
                    ></TextArea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NeuCard>
      </form>
    </React.Fragment>
  );
}

InputCard.defaultProps = {
  rounded: true,
  title: 'Save Task',
  subHeading: 'Grind on 2 days',
  type: 'TODO',
  dueDate: Date.now().toString(),
  author: 'NM',
  typeColor: 'var(--primary)',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, recusandae doloremque! Quidem dolores numquam eligendi totam illo sequi alias, labore cumque nostrum. Tempora, illum. Numquam voluptatibus corrupti autem culpa cumque?'
};

InputCard.propTypes = {
  rounded: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dueDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  author: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  typeColor: PropTypes.string,
  description: PropTypes.string
};

export default InputCard;
