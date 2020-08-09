import { todosActions } from 'Redux/actions';

import { apiRequest } from 'Redux/actions/apiActions';
import { useDispatch } from 'react-redux';

const INITIAL_STATE = {
  todos: [],
  search: '',
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case todosActions.ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };

    case todosActions.GET_TODO:
      return { ...state, todos: payload };

    default:
      return state;
  }
};
