import {
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  ADD_USER,
  STORE_USER
} from "../actions/actions.types";

const initalState = {
  list: [],
  user: []
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return{
          ...state,
          list:action.data
      };
    
    case ADD_TODO:
      // let len = state.list.length;
      return {
        list: [
          ...state.list,
          { id: action.id, text: action.text }
        ]
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      };

    case UPDATE_TODO : 
      const index = state.list.findIndex(element => element.id === action.id)
      const updatedArray= [...state.list]
      updatedArray[index].text=action.text
      return {
        ...state,
       list:updatedArray
      };

    case ADD_USER :
      return {
         ...state.user,
        user  : 
        { [action.fieldName]:action.data }
        
        } 
    case  STORE_USER : 
    {
      return {
        [action.fieldName]:action.data
      }
    }  
           
    
    default:
      return state;
  }
};

export default todos;