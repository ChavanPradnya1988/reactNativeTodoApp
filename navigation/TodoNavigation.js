import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import TodoScreen from '../screens/TodoScreen';
import TodoEditScreen from '../screens/TodoEditScreen';
import AuthScreen from '../screens/AuthScreen';
import StartupScreen from '../screens/StartUpScreen';
import * as authActions from '../store/actions/Auth';


const TodoNavigator = createStackNavigator(
  {
    Todos: TodoScreen,
    TodoEdit: TodoEditScreen,

  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          size={23}
        />
      )
    },
  }
);




const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  
);

const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Auth: AuthNavigator,
    Todos: TodoNavigator
});

export default createAppContainer(MainNavigator);





































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