import Styled from 'styled-components/native'

export const Container = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`;

export const Logo = Styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export const Perfil = Styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 100px;
`;