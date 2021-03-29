import Styled from 'styled-components/native'

export const Container = Styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #0cadff;
`;

export const Mensagem = Styled.Text`
    font-size: ${props => props.size};
    font-weight: bold;
    width: 80%;
    margin-bottom: ${props => props.marginB};
    color: ${props => props.color};
`;

export const Confirmar = Styled.TouchableOpacity`
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 10px 30px;
`;

export const TextConfirmar = Styled.Text`
    color: #ffffff;
    font-weight: bold;
`;