export const GET_TODO = 'GET_TODO';
export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const getTodo = (todos) => {
  return {
    type: GET_TODO,
    payload: todos
  };
};
