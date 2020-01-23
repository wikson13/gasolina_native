import React from 'react';
import {View, Text,Button} from "react-native";

const Fuel = props => {
    return (
        <View>
            <Text>Fuel</Text>
            <Button title="Go Service" onPress={()=>{
                props.navigation.navigate('Service')
            }}/>
        </View>
    );
};

export default Fuel;
