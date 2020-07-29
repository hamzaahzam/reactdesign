import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Container } from 'native-base';

const PlanetName = ({ navigation }) => {
    return (
        <Container style={styles.background}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 57, marginTop: 10, backgroundColor: '#3c3c3c' }}>Ship/Freighter
                 Name</Text>
            </View>
            <Image style={{ marginTop: 10, height: '25%', width: '100%' }} source={require('../assets/gray.jpg')} />
            <Text style={{ color: 'white', backgroundColor: '#3c3c3c', marginTop: 10, fontSize: 22 }}>A cargo ship or
            freighter is a merchant ship that carries cargo, goods, and materials from one port to another. Thousands
            of cargo carriers ply the world's seas and oceans each year, handling the bulk of international trade. 
            Cargo ships are usually specially designed for the task, often being equipped with cranes and other 
            mechanisms to load and unload, and come in all sizes. Today, they are almost always built by welded 
            steel, and with some exceptions generally have a life expectancy of 25 to 30 years before being scrapped.
            </Text>
            
        </Container>
    );
};

export default PlanetName;

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
    },
    TopText: {
        fontSize: 50,
        color: '#d1d0d0',
        marginLeft: 5,
        marginBottom: 25
    },
    btntext: {
        fontSize: 55,
        textAlign: 'center',

    },
    btn: {
        backgroundColor: '#8e8d8d',
        marginTop: 20,
        marginBottom: 50,
        borderRadius: 60,
        marginLeft: 10,
        marginRight: 10
    },
    bottomtext: {
        fontSize: 60,
        color: '#d1d0d0',
        textAlign: 'center',

    }
});