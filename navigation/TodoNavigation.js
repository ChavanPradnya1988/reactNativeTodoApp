import * as React from 'react';
import TodoScreen from '../screens/TodoScreen';
import TodoEditScreen from '../screens/TodoEditScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TodoNavigator = createNativeStackNavigator();

function TodoNavigation () {
    return(


      <TodoNavigator.Navigator>
          <TodoNavigator.Screen
          name="Todo"
          component={ TodoScreen }
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

export default TodoNavigation;
