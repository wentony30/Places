import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Container, Mensagem, Confirmar, TextConfirmar } from './style'

const Vaga = ({route}) => {
   const navigation = useNavigation();
   const { cidade } = route.params;

   return(
      <Container>
         <Mensagem size="25px" marginB="0px" color="#ffffff">
            Já guardamos sua Vaga!
         </Mensagem>
         <Mensagem size="25px" marginB="40px" color="#2e5dae">
            {cidade} te espera.
         </Mensagem>
         <Confirmar onPress={() => navigation.navigate('Home')}>
            <TextConfirmar>
               Ebaaaa
            </TextConfirmar>
         </Confirmar>
      </Container>
   );
}

export default Vaga;