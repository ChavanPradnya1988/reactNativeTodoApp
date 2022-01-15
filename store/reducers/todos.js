import {
  ADD_TODO,
  DELETE_TODO
} from "../actions/actions.types";

const initalState = {
  list: [{ id: 0, text: "ABC"}]
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let len = state.list
      return {
        list: [
          ...state.list,
          { id: len, text: action.text }
        ]
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      };

    default:
      return state;
  }
};

export default todos;