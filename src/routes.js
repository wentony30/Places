import React, { useState } from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import lightTheme from './theme/light'
import darkTheme from './theme/dark'
import Header from './components/Header'


//Telas
import Splash from './screens/Splash'
import Home from './screens/Home'
import Lugares from './screens/Lugares'
import Vaga from './screens/Vaga'

const Stack = createStackNavigator();

const Routes = () => {

    const [dark, setDark] = useState(false);

    return (
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
            <NavigationContainer>
                <StatusBar 
                    barStyle={dark ? 'light-content' : 'dark-content'}
                    backgroundColor={dark ? darkTheme.background : lightTheme.background}
                />
                <Header 
                    darkMode={dark} 
                    changeDarkMode={() => setDark(!dark)} 
                    colorIcon={dark ? darkTheme.colorIcon : lightTheme.colorIcon} 
                />
                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Lugares" component={Lugares} />
                    <Stack.Screen name="Vaga" component={Vaga} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default Routes;