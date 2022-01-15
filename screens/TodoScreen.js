import * as React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Keyboard,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../store/actions/index";

function TodoScreen (props){
  const [text, setText] = React.useState("");
    const [task, setTask] = React.useState();
    const [taskItems, setTaskItems] = React.useState([]);
    // const [isDelete, setDelete] = React.useState(true);
    const [todo,setTodos] = React.useState([])
    const todos = useSelector((state) => state.todos.list);
    // const handleAddTask = () => {
    //   Keyboard.dismiss();
    //   setTaskItems([...taskItems, task])
    //   setTask(null);
    // }
   const dispatch = useDispatch();
    const handleSubmit = event => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    } else {
      // alert("cant not to empty text");
    }
    // event.preventDefault();
  };

  //   const completeTask = (index) => {
  //   let itemsCopy = [...taskItems];
  //   itemsCopy.splice(index, 1);
  //   setTaskItems(itemsCopy)
  // }
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

//  const onRemove = id => e => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };
  // const handleDelete = (index) => {
  //   const removedArr = [...todo].filter((todo) => todo.index !== index);
  //   setTodos(removedArr);
  //   console.log("removedArr",removedArr)
  // }

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>
                TodoScreen</Text>
                {todos.map(todo => (
                  <View style={styles.indexContainer}>
                    <View style={styles.taskContainer}>
                    <Text key={todo.id} style={styles.index}>{todo.text}</Text>
                    <TouchableOpacity
                     onPress={()=>{props.navigation.navigate('Todo Edit',{taskItem:todo.text})}}
                    >
                    {console.log(taskItems)}
                    <Feather name="edit" size={24} color="white" style={styles.delete} />
                    </TouchableOpacity>
                    <TouchableOpacity
                       key={todo.id}
                       onPress={()=>{handleDelete(todo.id)}}
                    >
                     <MaterialIcons name="delete" size={24} color="white" style={styles.delete} />                        
                   </TouchableOpacity> 
                   </View>
                 </View>
              ))}
            {/* </Text> */}
            <View style={styles.inputContainer}>
              <TextInput
            type="text"
            placeholder="add a todo item"
            name="todo"
            value={text}
            style={styles.textInput}
            onChange={event => setText(event.target.value)}
          />

              
              <TouchableOpacity
                onPress={()=>{handleSubmit()}}
               >
                  <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
              </View>
              
           {/* <Button title='TodoDetailsScreen' onPress={()=>props.navigation.navigate('todo Details')}/> */}
        </View>
    )
}

export default TodoScreen;

const styles = StyleSheet.create(
    {
      container:{
        
          justifyContent:'center',
          alignItems:'center',
          flex: 1,
          fontFamily:'montserrat'
         },
         inputContainer:{
          borderColor: '#fff',
          backgroundColor: '#3E3364',
          borderWidth: 1,
          marginHorizontal: 20,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          position: 'absolute',
          bottom: 20,
         },
        textInput:{
        color: 'white',
        //  backgroundColor: '#f4f4f4',
         margin: 4,
         height:50,
        },
      text:{
        padding:10,
      },
      heading: {
    
       fontSize: 20,
       fontWeight: '600',
       marginTop: 30,
       marginBottom: 10,
      marginLeft: 20,
     },
     indexContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
        alignItems:screenLeft,
        margin:10
    },
    taskContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        minHeight: 50,
        marginVertical:10
    },
    delete:{
      marginLeft:15
    }

    }
)

