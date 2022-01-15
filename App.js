import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './store/reducers';
import TodoNavigation from './navigation/TodoNavigation';
import AppNavigation from './navigation/AppNavigation';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { StyleSheet } from 'react-native';

const store = createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// function MyStack() {
//   return (
    
//   );
// }

export default function App() {
  return (
     <Provider store={store}>
    <NavigationContainer>
        <TodoNavigation style={styles.todoContainer}/>
        {/* <AppNavigation /> */}
        {/* <SignUp /> */}
    </NavigationContainer>
    </Provider>
       
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    fontFamily:'Roboto',//Default font family
  }
});