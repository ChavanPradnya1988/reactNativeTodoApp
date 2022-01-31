
import AsyncStorage from '@react-native-community/async-storage'
// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

let timer;

export const authenticate = (userId) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, userId: userId });
  };
};

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(
       'https://todo-rn-4c31a-default-rtdb.firebaseio.com/authentication/users.json',

  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_EXISTS') {
        message = 'This email exists already!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch(
      authenticate(
        resData.name,
        console.log(resData.name),
        // resData.idToken,
        // console.log(resData.idToken),
        // parseInt(resData.expiresIn) * 1000
      )
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );
    saveDataToStorage( resData.userIdId );
  };
};

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://todo-rn-4c31a-default-rtdb.firebaseio.com/authentication/users.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch(
      authenticate(
        resData.userId,
        // resData.idToken,
        // parseInt(resData.expiresIn) * 1000
      )
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );
    saveDataToStorage(resData.userId);
  };
};

// export const logout = () => {
//   clearLogoutTimer();
//   removeItem('userData');
//   return { type: LOGOUT };
// };

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

// const setLogoutTimer = expirationTime => {
//   return dispatch => {
//     timer = setTimeout(() => {
//       dispatch(logout());
//     }, expirationTime);
//   };
// };

const saveDataToStorage = (userId) => {
AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      userId: userId,
    })
  );
};
