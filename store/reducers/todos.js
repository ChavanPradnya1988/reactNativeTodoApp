import {
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  ADD_USER,
  STORE_USER
} from "../actions/actions.types";

const initalState = {
  data: []
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return{
          ...state,
          data:action.data
      };
    
    case ADD_TODO:
      // let len = state.list.length;
      return {

        data: [
          ...state.data,
          { id: action.id, text: action.text }
        ]
      };
    case DELETE_TODO:
      return {
        data:state.data.filter(item => item.id !== action.id)
      };

    case UPDATE_TODO : 
      const index = state.data.findIndex(element => element.id === action.id)
      const updatedArray= [...state.data]
      updatedArray[index].text=action.text
      return {
        ...state,
       data:updatedArray
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