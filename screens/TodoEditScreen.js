import * as React from 'react';
import { View,Text,Button,TextInput,Keyboard } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../store/actions/index";

function TodoEditScreen (props){
const param1 = props.route.params.taskItem;
  const [text, setText] = React.useState(param1);
  const [isEditing, setEdit] = React.useState(true);
  const [taskItems, setTaskItems] = React.useState(param1);
  const [isDelete, setDelete] = React.useState(true);
  const dispatch = useDispatch();
  
//   const handleEdit = () => {
//     setText("");
//     setEdit(false);
//   };
  // console.log("param")
  console.log(param1)
    
    const handleSubmit = event => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
      props.navigation.goBack();
    } else {
      // alert("cant not to empty text");
    }
    // event.preventDefault();
  };

    // const handleEdit = () => {
    //   setText("");
    //   Keyboard.dismiss();
    //   setTaskItems([...taskItems, task])
    //   setEdit(false);
      
    // }
  
    // const handleDelete = () =>{

    //   setDelete(true);
    // }
    return(
        <View style={{ justifyContent:'center',alignItems:'center'}}>
            <Text>
                TodoEditScreen
            </Text>
            
       <View>
        {isEditing 
          ? <TextInput value={text} onChange={event => setText(event.target.value)} />
          : <Text>{param1}</Text>
        }
        <View>
          {/* <Button title="Delete" onPress={() => {}} /> */}
          {isDelete 
            ? <Button title="Save" onPress={handleSubmit} />
            : <Button title="Delete" onPress={handleDelete} />
          }
        </View>
      </View>
    </View>
            
    )
}

export default TodoEditScreen;