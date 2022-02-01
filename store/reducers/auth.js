import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL } from '../actions/Auth';

const initialState = {
  userId: null,
  toen:null,
  didTryAutoLogin : false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
   case AUTHENTICATE:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        didTryAutoLogin : true
      };
    case SET_DID_TRY_AL:
      return {
            ...state,
            didTryAutoLogin: true
          };
    case LOGOUT:
      return {
        ...initialState,
        didTryAutoLogin: true
      }
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
