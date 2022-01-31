import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  FETCH_TODOS
} from "./actions.types";

export const fetchTodos = () => async dispatch => {
 const response = await fetch ("https://todo-rn-4c31a-default-rtdb.firebaseio.com/todo.json");
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
            type:FETCH_TODOS,
            data:data
        }
    )
}
export const addTodo = text => async dispatch => {
  const response = await fetch ("https://todo-rn-4c31a-default-rtdb.firebaseio.com/todo.json",
  {
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          text
      })
    }
   
  );
  const resData = await response.json()
  dispatch ({
    type: ADD_TODO,
    text: text,
    id:resData.name
  }) 
};

export const deleteTodo = id => async dispatch => {
    const response = await fetch (`https://console.firebase.google.com/project/todo-rn-4c31a/authentication/users.json`,
    {
      method:"DELETE",
      headers:{
          "Content-Type":"application/json"
      },
      
    }
   );
   
//   const respince = await fetch ("")
  dispatch ({
    type: DELETE_TODO,
    id : id
  })
};

export const updateToDo = (id,text) => async dispatch => {
    const response = await fetch (`https://todo-rn-4c31a-default-rtdb.firebaseio.com/todo/${id}.json`,
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

