import React, { useState } from 'react'
import { View, Text, TouchableOpacity , StatusBar, TextInput, StyleSheet} from 'react-native'


export default function SignUp({ navigation }) {
  const [name, setName] = useState({ value: ''})
  const [email, setEmail] = useState({ value: ''})
  const [password, setPassword] = useState({ value: ''})


  return (
   <View style={styles.container}>
       <StatusBar style="auto" />
      <TextInput
        placeholder="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text})}
        error={!!name.error}
        errorText={name.error}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Email"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text})}
        textContentType="emailAddress"
        style={styles.textInput}
      />
      <TextInput
        placeholder='password'
        label="Password"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text})}
        secureTextEntry
        style={styles.textInput}
      />
      {
          console.log(name,email,password)
      }
      <TouchableOpacity onPress={()=>props.navigation.navigate('Todo')}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
    {
      container:{
          justifyContent:'center',
          alignItems:'center',
          flex: 1
         },
    textInput:{
        margin:'5px',
        height: 40,
        margin: 12,
        padding: 10,
        width:300,
        borderStyle:'solid',
    },
    text:{
      padding:10,
    }

    }
)

