import {
  ADD_TODO,
  DELETE_TODO,
} from "./actions.types";


export const addTodo = text = dispatch => {
  dispatch ({
    type: ADD_TODO,
    text
  }) 
};

export const deleteTodo = id = dispatch => {
  dispatch ({
    type: DELETE_TODO,
    id : id
  })
};