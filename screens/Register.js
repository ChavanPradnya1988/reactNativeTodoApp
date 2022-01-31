
import React,{ useState , ueRef } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Button, ActivityIndicator } from "react-native";
import { addUser, register } from '../store/actions/register'
import { AntDesign } from '@expo/vector-icons'; 

const required = (value) => {
    if (!value) {
        return (
           <Text>This fied is required</Text>
        );
    }
};


const Register = (props) => {
   const [email, setEmail] = useState("");
   const [password,setPassword] = useState("")
   const [isSignup, setIsSignup] = useState(false);
   const [isLoading, setIsLoading] = useState(false);


   const dispatch = useDispatch();
   const handleSubmit = () =>
    dispatch(register(email,password));
const authHandler = async () => {
    let action;
    if (isSignup) {
      action = addUser(
        email,
        password
      );
    } else {
      action = register(
        email,
        password
      );
    }
  
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate('Todos');
    } catch (err) {
     
      setIsLoading(false);
    }
  };

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Register</Text>
            <TextInput
            placeholder="E-Mail"
            placeholderTextColor={"white"}
            keyboardType="email-address"
            autoCapitalize="none"
            name="email"
            value={email}
            style={styles.inputContainer}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"white"}
            style={styles.inputContainer}
            keyboardType="password"
            autoCapitalize="none"
            name="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View>
            
            {isLoading ? (
                <ActivityIndicator size="small" />
              ) : (
               <Button
                  title={isSignup ? 'Sign Up' : 'Login'}
              
                  onPress={authHandler}
                />
                
              )}
          </View>
           <View>
              <Button
                title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
               
                onPress={() => {
                  setIsSignup(prevState => !prevState);
                }}
              />
            </View>
        </View>
    )

}

export default Register;


Register.navigationOptions = {
  headerTitle: 'Authenticate'
};


const styles = StyleSheet.create(
    {
      container:{
        
          justifyContent:'center',
          alignItems:'center',
          flex: 1,
         },
         inputContainer:{
          backgroundColor: '#3E3364',
          borderWidth: 1,
          marginHorizontal: 20,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop:20,
          // position: 'absolute',
          bottom: 20,
        color: 'white',
         margin: 4,
         height:50,
        },
      antDesign:{
        padding:20
          },
      heading: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 20,
     },
     indexContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
    },
    index: {
        color: 'white',
        fontSize: 14
        
    },
    taskContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        minHeight: 50,
        marginVertical:10
    },
    delete:{
      marginLeft:15
    }

    }
)

