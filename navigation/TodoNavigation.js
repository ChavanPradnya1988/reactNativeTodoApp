import * as React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import TodoScreen from '../screens/TodoScreen';
import TodoEditScreen from '../screens/TodoEditScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import { logout } from '../store/actions/Auth';


const TodoNavigator = createNativeStackNavigator();


export const TodoNavigation = () => {
  
const dispatch = useDispatch();

    return(


      <TodoNavigator.Navigator>
          <TodoNavigator.Screen
          name="Todo"
          component={ TodoScreen }
          options={() => ({
    
    headerRight: () => (
      <Text onPress={() => dispatch(logout())}>Log out</Text>
     
    ),
  })}
          />
        
          <TodoNavigator.Screen
          name="todo Details"
          component={ TodoDetailsScreen }/>              
        
          <TodoNavigator.Screen
          name="Todo Edit" 
          component={ TodoEditScreen}
          />
                  

      </TodoNavigator.Navigator>

    )
}



const AuthNavigator = createNativeStackNavigator();

export const AuthNavigation = () => {
  return(
   <AuthNavigator.Navigator initialRouteName='Login'>

            <AuthNavigator.Screen name="Auth" component={AuthScreen} />
        </AuthNavigator.Navigator>
  )
}







































// import * as React from 'react';
// import TodoScreen from '../screens/TodoScreen';
// import TodoEditScreen from '../screens/TodoEditScreen';
// import TodoDetailsScreen from '../screens/TodoDetailsScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import NavigationContainer from './NavigationContainer';
// import {
//   createSwitchNavigator,
//   createAppContainer,
// } from 'react-navigation';

// const TodoNavigator = createNativeStackNavigator();

// const TodoNavigation = () => {
//     return(


//       <TodoNavigator.Navigator>
//           <TodoNavigator.Screen
//           name="Todos"
//           component={ TodoScreen }
//           />
        
//           <TodoNavigator.Screen
//           name="todo Details"
//           component={ TodoDetailsScreen }/>              
        
//           <TodoNavigator.Screen
//           name="Todo Edit" 
//           component={ TodoEditScreen}
//           />
                  

//       </TodoNavigator.Navigator>

//     )
// }



// const AuthNavigator = createNativeStackNavigator();

// const AuthNavigation = () => {
  
//   <AuthNavigator
//   name="Auth"
//   component={ NavigationContainer }>

//   </AuthNavigator>
// }
// const MainNavigator = createSwitchNavigator({
//   Auth: AuthNavigation,
//   Todo: TodoNavigation
// });

// export default createAppContainer(MainNavigator);