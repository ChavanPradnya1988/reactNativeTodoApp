
import {
  LOGIN,
  ADD_USER,
  FORM_SUBMIT_STATUS
} from "./auth"





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