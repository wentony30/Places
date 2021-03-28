import React from 'react'
import { Container, Perfil, Logo } from './style' 
import Foto from '../../assets/perfil.png'

const Header = () => {

   return(
      <Container>
         <Logo>Places</Logo>
         <Perfil source={Foto} />
      </Container>
   );
}

export default Header;