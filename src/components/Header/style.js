import Styled from 'styled-components/native'

export const Container = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: ${props => props.theme.background};
`;

export const Logo = Styled.Text`
    font-size: 20px;
    font-family: 'Baloo2-ExtraBold';
    color: ${props => props.theme.titleColor};
`;

export const Perfil = Styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 100px;
`;

export const ContainerSwitch = Styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;