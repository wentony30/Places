import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import Lugares from '../../../db.json'
import {Container, TituloCidade, ContainerItem, TextItem} from './style'
import {useNavigation} from '@react-navigation/native'


const Home = () => {

    const arrayLugares = Lugares.lugares;
    const navigation = useNavigation();

    const ContainerLugares = ({index}) => {
        const Places = arrayLugares[index].cidade.lugar;

        return (
            <View style={styles.todosLugares} >
                {Places.map((lugar, index) => (
                    <ContainerItem key={lugar.nome} onPress={() => handlePress(lugar)}>
                        <Image source={{ uri: lugar.img }} style={styles.imageLugares} />
                        <TextItem>{lugar.nome}</TextItem>
                    </ContainerItem>
                ))}
            </View>
        );
    }


    const handlePress = (lugar) => {
        navigation.navigate('Lugares', {
            lugar: lugar
        })
    }

    return (
        <>
            <ScrollView>
                <Container>
                    {
                        arrayLugares.map((lugar, index) => {
                            return (
                                <View key={lugar.cidade.nome_cidade}>
                                    <TituloCidade index={index}>{lugar.cidade.nome_cidade}</TituloCidade>
                                    <ContainerLugares index={index} />
                                </View>
                            );
                        })
                    }
                </Container>
            </ScrollView>
        </>
    ); 
}

const styles = StyleSheet.create({
    todosLugares: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imageLugares: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    }
})


export default Home;