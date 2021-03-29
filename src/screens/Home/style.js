import Styled from 'styled-components/native'

export const Container = Styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background: ${props => props.theme.background};
`;

export const TituloCidade = Styled.Text`
    font-size: 25px;
    margin: 10px;
    margin-top: ${props => props.index == 0 ? '0px' : '10px'};
    font-family: 'Baloo2-Regular';
    color: ${props => props.theme.titleColor};
`;

export const ContainerItem = Styled.TouchableOpacity`
    position: relative;
    width: 44%;
    height: 200px;
    margin: 10px;
`;

export const TextItem = Styled.Text`
    position: absolute;
    bottom: 10px;
    left: 15px;
    color: #f8f8f8;
    font-family: 'Baloo2-Bold';
    text-shadow: 0 2px 4px #00000099;
`;