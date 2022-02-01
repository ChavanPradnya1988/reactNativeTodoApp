import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import {TodoNavigation , AuthNavigation} from './TodoNavigation';
import StartupScreen from '../screens/StartUpScreen';

const AppNavigator = props => {
  const isAuth = useSelector(state => !!state.auth.token);
  const didTryAutoLogin = useSelector(state=> state.auth.didTryAutoLogin);
 console.log(isAuth,didTryAutoLogin);
  return (
    <NavigationContainer>
       {isAuth && <TodoNavigation />}
       {!isAuth && didTryAutoLogin && <AuthNavigation />}
       {!isAuth && !didTryAutoLogin && <StartupScreen />}
      </NavigationContainer>
 
  );
};

export default AppNavigator;





















// import React, { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { NavigationActions } from 'react-navigation';

// import TodoNavigation from './TodoNavigation';
// import Login from '../screens/Login'

// const NavigationContainer = props => {
  // const navRef = useRef();
  // const isAuth = useSelector(state => !!state.auth.token);

  // useEffect(() => {
  //   if (!isAuth) {
  //     navRef.current.dispatch(
  //       NavigationActions.navigate({ routeName: 'Auth' })
  //     );
  //   }
  // }, [isAuth]);

//   return <Login />;
// };

// export default NavigationContainer;
