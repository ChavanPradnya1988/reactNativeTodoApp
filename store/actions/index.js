import {
  ADD_TODO,
  DELETE_TODO,
} from "./actions.types";


import {
  LOGIN,
  ADD_USER,
  FORM_SUBMIT_STATUS
} from "./auth"



export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id : id
  };
};

export const login = user => {
  return{
    type: LOGIN,
    user
  };
};

export const addUser =  user => {
  return{
    type: ADD_USER,
    user
  };
};

export const formSubmitStatus = status => {
  return {
    type: FORM_SUBMIT_STATUS,
    status
  };
};