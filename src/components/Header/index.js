import React from 'react'
import { Container, Perfil, Logo, ContainerSwitch } from './style' 
import { Switch } from 'react-native'
import Foto from '../../assets/perfil.png'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = ({ darkMode, changeDarkMode, colorIcon }) => {

   return(
      <Container>
         <Logo>Places</Logo>
         <ContainerSwitch>
            <Icon name="sunny-outline" size={20} color={colorIcon}></Icon>
            <Switch 
               value={darkMode}
               onValueChange={changeDarkMode}
               thumbColor="#c4c4c4"
            />
            <Icon name="moon-outline" size={20} color={colorIcon}></Icon>
         </ContainerSwitch>
         <Perfil source={Foto} />
      </Container>
   );
}

export default Header;