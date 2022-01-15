import {
    LOGIN,
    ADD_USER,
    FORM_SUBMIT_STATUS
  } from "../store/actions/auth";

const initialState = {
    profile:
    {
        id: 0,
       email: "pradnya.c@girmesofttech.com",
       password: '123456'
    },
    formSubmitted: false
}

const auth = ( state=initialState, action)=> {
  switch (action.type) {
      case LOGIN:
          return {
              ...state,
              profile: state.user,
              formSubmitted: false
          }

     default:
         return state;
  }
}

export default auth;
