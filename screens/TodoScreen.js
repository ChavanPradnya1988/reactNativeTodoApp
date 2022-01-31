import * as React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Keyboard,TextInput, Alert, Button, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, fetchTodos } from "../store/actions/todo";
import { SafeAreaView } from 'react-native-safe-area-context';

function TodoScreen (props){
  const [text, setText] = React.useState("");

  const todos = useSelector((state) => state.Todos.list);
   
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(fetchTodos());
    // console.log("bla bla")
  },[])




  const handleSubmit = () => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    } else {
       Alert.alert('Empty', 'Type your todo', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };


    return(
        <View style={styles.container}>
          {/* <Button title='bla bla' onPress={() => console.log(todos)}/> */}
      
             <FlatList
  
            data={todos}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
             
            <View key={itemData.item.id} style={styles.indexContainer}>
                    <View style={styles.taskContainer}>
                    <Text style={styles.index}>{itemData.item.text}</Text>
                    <TouchableOpacity
                     onPress={()=>props.navigation.navigate('Todo Edit',{taskItem: itemData.item})}
                    >
            
                    <Feather name="edit" size={24} color="white" style={styles.delete} />
                    </TouchableOpacity>
                    <TouchableOpacity
                       key={itemData.item.id}
                       onPress={handleDelete.bind(this, itemData.item.id)}
                    >
                     <MaterialIcons name="delete" size={24} color="white" style={styles.delete} />                        
                   </TouchableOpacity> 
                   </View>
                 </View>
            )}

      />
      
                {/* {todos.map(todo => (
                  <View key={todo.id} style={styles.indexContainer}>
                    <View style={styles.taskContainer}>
                    <Text style={styles.index}>{todo.text}</Text>
                    <TouchableOpacity
                     onPress={()=>props.navigation.navigate('Todo Edit',{taskItem:todo})}
                    >
            
                    <Feather name="edit" size={24} color="white" style={styles.delete} />
                    </TouchableOpacity>
                    <TouchableOpacity
                       key={todo.id}
                       onPress={handleDelete.bind(this, todo.id)}
                    >
                     <MaterialIcons name="delete" size={24} color="white" style={styles.delete} />                        
                   </TouchableOpacity> 
                   </View>
                 </View>
              ))} */}
            {/* </Text> */}
            <View style={styles.inputContainer}>
              <TextInput
            type="text"
            placeholderTextColor={"white"}
            placeholder="Add a todo "
            name="todo"
            value={text}
            style={styles.textInput}
            onChangeText={text => setText(text)}
          />
 
              <TouchableOpacity
                onPress={handleSubmit}
               >
                  <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
              </View>
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
          backgroundColor: '#3E3364',
          borderWidth: 1,
          marginHorizontal: 20,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop:20,
          // position: 'absolute',
          bottom: 20,
         },
        textInput:{
        color: 'white',
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
        color: 'white',
        fontSize: 14
        
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

