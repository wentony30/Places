import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'


//Telas
import Home from './screens/Home'
import Lugares from './screens/Lugares'

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Lugares" component={Lugares} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;