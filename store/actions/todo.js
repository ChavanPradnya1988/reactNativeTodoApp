import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  FETCH_TODOS
} from "./actions.types";

export const fetchTodos = () => async (dispatch,getState) => {
  const uid = getState().auth.userId;
 const response = await fetch (`https://todo-rn-4c31a-default-rtdb.firebaseio.com/todo/${uid}.json`);
 
// console.log(uid)
 const resData = await response.json()
// console.log(resData)
 let data = [];
 for (const key in resData){
     data.push({
         id:key,
         text:resData[key].text
     })
 }

    dispatch (
        {
            type:FETCH_TODOS,
            data:data
        }
    )

}
export const addTodo = text => async (dispatch, getState) => {

  const uid = getState().auth.userId;
  const response = await fetch (`https://todo-rn-4c31a-default-rtdb.firebaseio.com/todo/${uid}.json`,
  {
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          text: text
      })
    }
   
  );
  const resData = await response.json();
  console.log(resData, uid);
  dispatch ({
    type: ADD_TODO,
    text: text,
    id:resData.name
  }) 
};

export const deleteTodo = id => async (dispatch,getState) => {
    const uid = getState().auth.userId;
    
    const response = await fetch (`https://todo-rn-4c31a-default-rtdb.firebaseio.com/todo/${uid}/${id}.json`,
    {
      method:"DELETE",
      headers:{
          "Content-Type":"application/json"
      },
      
    }
   );

  dispatch ({
    type: DELETE_TODO,
    id : id
  })
};

export const updateToDo = (id,text) => async (dispatch,getState) => {
   const uid = getState().auth.userId;
    const response = await fetch (`https://todo-rn-4c31a-default-rtdb.firebaseio.com/todo/${uid}/${id}.json`,
    {
      method:"PATCH",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({

          text:text
      })
    });
    dispatch ({
        type : UPDATE_TODO,
        id : id,
        text:text
    })
}

