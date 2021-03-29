import React from 'react'
import { Container, Fundo, Efeito, Mensagem } from './style'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Splash = ({route}) => {

    const navigation = useNavigation();

    const imagem = 'https://i.pinimg.com/originals/3a/3a/30/3a3a30d790406a5a025e97ea01a143bb.jpg'

    setTimeout(() => {
        navigation.navigate('Home');
    }, 2000)

    return(
        <Container>
            <Fundo source={{ uri: imagem }} />
            <Efeito />
            <Mensagem>
                Carregando Lugares
            </Mensagem>
            <ActivityIndicator size="small" color="#f8f8f8" />
        </Container>
    );
}

export default Splash;