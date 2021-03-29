import React from 'react'
import { 
   Container, 
   Imagem, 
   ContainerImage, 
   Voltar, 
   Titulo, 
   Descricao, 
   GuardarLugar, 
   TextGuardar 
} from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'

const Lugares = ({ route }) => {
   const navigation = useNavigation();
   const { lugar } = route.params

   return(
      <>
         <Container>
               <ContainerImage>
                  <Imagem source={{ uri: lugar.img }} />
                  <Voltar onPress={() => navigation.goBack()}>
                     <Icon name="chevron-back-outline" size={25} color="#ffffff" ></Icon>
                  </Voltar>
               </ContainerImage>
               <Titulo>{lugar.nome}</Titulo>
               <ScrollView>
                  <Descricao>{lugar.description}</Descricao>
                  <GuardarLugar onPress={() => navigation.navigate('Vaga', { cidade: lugar.nome })}>
                     <TextGuardar>
                        Quero ir!
                     </TextGuardar>
                  </GuardarLugar>
               </ScrollView>
         </Container>
      </>
   );
}

export default Lugares;