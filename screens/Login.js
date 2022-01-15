import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Login(props) {
  const [email, setEmail] = useState({ value: ''})
  const [password, setPassword] = useState({ value: ''})


  return (
    <View style={{justifyContent:'center',alignItems:'center',flex: 1}}>


      <StatusBar style="auto" />
       <TextInput
        placeholder="Email"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text})}
        textContentType="emailAddress"
      />
      <TextInput
        placeholder='password'
        label="Password"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text})}
        secureTextEntry
      />
      {
          console.log(email,password)
      }

      <TouchableOpacity onPress={()=>props.navigation.navigate('Todo')}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

