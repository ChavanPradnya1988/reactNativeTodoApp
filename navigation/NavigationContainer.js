import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import TodoNavigation from './TodoNavigation';

const NavigationContainer = props => {
  const navRef = useRef();
  const isAuth = useSelector(state => !!state.auth.userId);

  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(
        NavigationActions.navigate({ routeName: 'Auth' })
      );
    }
  }, [isAuth]);

  return <TodoNavigation ref={navRef} />;
};

export default NavigationContainer;





















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
