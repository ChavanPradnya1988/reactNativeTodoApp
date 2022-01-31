import {
  ADD_USER,
  STORE_USER
} from "./actions.types";


export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

let timer;

export const authenticate = (userId, token, expiryTime) => {
  return dispatch => {
 
    dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};



export const storeData = () => async dispatch => {
 const response = await fetch ("https://todo-rn-4c31a-default-rtdb.firebaseio.com/authentication/users.json");
//  console.log(response)
 const resData = await response.json()
//  console.log(resData)
 let data = [];
 for (const key in resData){
     data.push({
         id:key,
         text:resData[key].text
     })
 }

    dispatch (
        {
            type:STORE_USER,
            data:data
        }
    )
}


export const addUser = (email, password) => {
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
        resData.name,
        console.log(resData.name),
        resData.idToken,
        parseInt(resData.expiresIn) * 1000
      )
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );
    saveDataToStorage(resData.idToken, resData.localId, expirationDate);
  };
};




const saveDataToStorage = (token, userId, expirationDate) => {
 
    JSON.stringify({
      token: token,
      userId: userId,
      // expiryDate: expirationDate.toISOString()
    })
  };






export const register = (email, password) => {
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
    }
  }



// export const addUser = (email,password) => async dispatch => {
//   const response = await fetch ("https://todo-rn-4c31a-default-rtdb.firebaseio.com/authentication/users.json",
//   {
//       method:"POST",
//       headers:{
//           "Content-Type":"application/json"
//       },
//       body:JSON.stringify({
//           email: email,
//           password: password,
//       })
//     }
   
//   );
//   const resData = await response.json()
//   dispatch ({
//     type: ADD_USER,
//     email:resData.email,
//     password:resData.idassword,
  
//   }) 
// };

