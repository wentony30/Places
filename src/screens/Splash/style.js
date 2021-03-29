import Styled from 'styled-components/native'

export const Container = Styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Fundo = Styled.Image`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Efeito = Styled.View`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000066;
`;

export const Mensagem = Styled.Text`
    color: #f8f8f8;
    font-size: 17px;
    font-family: 'Baloo2-Medium';
    margin-bottom: 15px;
`;