import Styled from 'styled-components/native'

export const Container = Styled.View`
    flex: 1;
    background: ${props => props.theme.background};
`;

export const Imagem = Styled.Image`
    width: 100%;
    height: 100%;
`;

export const ContainerImage = Styled.View`
    position: relative;
    height: 35%;
`;

export const Voltar = Styled.TouchableOpacity`
    position: absolute;
    top: 15px;
    left: 15px;
    background: #00000044;
    padding: 8px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Titulo = Styled.Text`
    font-size: 25px;
    font-family: 'Baloo2-ExtraBold';
    margin: 20px; 
    color: ${props => props.theme.titleColor};
`;

export const Descricao = Styled.Text`
    margin: 0 20px 20px;
    font-size: 16px;
    font-family: 'Baloo2-Regular';
    line-height: 20px;
    color: ${props => props.theme.titleColor+'aa'};
`;

export const GuardarLugar = Styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    margin: 10px 20px 20px;
    border: 2px solid #3e80ff;
    border-radius: 10px;
`;

export const TextGuardar = Styled.Text`
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    color: #3e80ff;
`;
