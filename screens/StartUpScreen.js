import React, { useEffect,useState } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/Auth';
import AsyncStorage from '@react-native-community/async-storage'

const StartupScreen = props => {
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(true);

 useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        props.navigation.navigate('Auth');
        return;
      }
      const transformedData = JSON.parse(userData);
      const { userId } = transformedData;
    //   const expirationDate = new Date(expiryDate);

    //   if (expirationDate <= new Date() || !token || !userId) {
    //     props.navigation.navigate('Auth');
    //     return;
    //   }

      // const expirationTime = expirationDate.getTime() - new Date().getTime();

      props.navigation.navigate('Todo');
      dispatch(authActions.authenticate(userId));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StartupScreen;
