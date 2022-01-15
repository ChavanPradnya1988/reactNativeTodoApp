import * as React from 'react';
import { View,Text,Button } from 'react-native';

function TodoDetailsScreen (props){
const {param1} = props.route.params;
console.log(param1)
    return(
        <View style={{ justifyContent:'center',alignItems:'center'}}>
            <Text>
                {param1}
            </Text>
            <Button title='TodoEditScreen' onPress={()=>props.navigation.navigate('Todo Edit')}/>
            <Button title='Back' onPress={()=>props.navigation.goBack()}></Button>
        </View>
    )
}

export default TodoDetailsScreen;