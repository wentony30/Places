import Styled from 'styled-components/native'

export const Container = Styled.SafeAreaView`
    flex: 1;
    padding: 20px;
`;

export const TituloCidade = Styled.Text`
    font-size: 25px;
    font-weight: bold;
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
    font-weight: bold;
    text-shadow: 0 2px 4px #00000099;
`;