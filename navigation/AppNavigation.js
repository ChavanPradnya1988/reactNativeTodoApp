import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppNavigator = createNativeStackNavigator();

function AppNavigation(){
    return(

         <AppNavigator.Navigator>
          <AppNavigator.Screen
          name="SignUp"
          component={ SignUp }
          />
        
          <AppNavigator.Screen
          name="Login"
          component={ Login }/> 

          <AppNavigator.Screen 
          name="Loading"
          component={ Loading }
          />                              

      </AppNavigator.Navigator>
    )
}