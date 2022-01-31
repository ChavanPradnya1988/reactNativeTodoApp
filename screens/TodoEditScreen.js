import * as React from 'react';
import { View,Text,Button,TextInput,Keyboard, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateToDo } from "../store/actions/todo";
import { MaterialIcons } from '@expo/vector-icons'; 

function TodoEditScreen (props){
const param1 = props.route.params.taskItem;
  const [text, setText] = React.useState(param1.text);
  const id = param1.id
 
  const dispatch = useDispatch();

    
    const handleSubmit = () => {
    if (text !== "") {
      dispatch(updateToDo(id,text));
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
           
            
           
  <View style={{flexDirection: "row"}}>
    
          <TextInput style={{margin: 10, backgroundColor: "#eee", color: '#000', padding:10, flex: 5}} value={text} onChangeText={text => setText(text)} />
   
    
      
        
           <TouchableOpacity style={{flex: 1, justifyContent: "center"}} onPress={handleSubmit} >
             <MaterialIcons name="save-alt" size={24} color="black" />
           </TouchableOpacity>
           
            
  </View>

     
        </View>
  
            
    )
}

export default TodoEditScreen;