import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StatusBar } from 'react-native'
import lightTheme from './theme/light'
import darkTheme from './theme/dark'
import Header from './components/Header'

//Telas
import Splash from './screens/Splash'
import Home from './screens/Home'
import Lugares from './screens/Lugares'
import Vaga from './screens/Vaga'


const AppStack = createStackNavigator();

const Routes = () => {

    const [dark, setDark] = useState(false);

    return(
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
                <AppStack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                    <AppStack.Screen name="Splash" component={Splash} />
                    <AppStack.Screen name="Home" component={Home} />
                    <AppStack.Screen name="Lugares" component={Lugares} />
                    <AppStack.Screen name="Vaga" component={Vaga} />
                </AppStack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default Routes;