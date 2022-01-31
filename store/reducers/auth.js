import { AUTHENTICATE } from '../actions/Auth';

const initialState = {
  userId: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        userId: action.userId
      };
    // case LOGOUT:
    //   return initialState;
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    default:
      return state;
  }
};

export default auth;
