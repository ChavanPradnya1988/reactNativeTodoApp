import React,{ useState , ueRef } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { addUser, storeData } from '../store/actions/register'
import { AntDesign } from '@expo/vector-icons'; 

const required = (value) => {
    if (!value) {
        return (
           <Text>This fied is required</Text>
        );
    }
};

const Login = (props) => {
  //  const route = useRoute();

    const [isLoading, setIsLoading] = useState(false);

   const [password,setPassword] = useState("")
   const [email, setEmail] = useState("")
    
   const [errorState, setErrorState] = useState({
        erroremail: "",
        errorpassword: ""
    })


   const onChangeInput = () => {
       dispatch(storeData())
    }



   const dispatch = useDispatch();
   const handleSubmit = () =>
    dispatch(addUser(email,password));

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
              <TextInput
              placeholder="E-Mail"
              placeholderTextColor={"white"}
              style={styles.inputContainer}
              keyboardType="email-address"
              autoCapitalize="none"
              name="email"
              value={email}
              errorText={errorState.erroremail}              
              onChangeText={text => setEmail(text)}
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
          <TouchableOpacity onPress={handleSubmit}>
            <AntDesign name="login" size={24} color="black" style={styles.antDesign} />
          </TouchableOpacity>
        </View>
    )

}

export default Login;

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

