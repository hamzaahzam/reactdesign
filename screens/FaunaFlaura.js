import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Container } from 'native-base';

const PlanetName = ({ navigation }) => {
    return (
        <Container style={styles.background}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 57, marginTop: 10, backgroundColor: '#3c3c3c' }}>Fauna/Flora
                 Name</Text>
            </View>
            <Image style={{ marginTop: 10, height: '25%', width: '100%' }} source={require('../assets/gray.jpg')} />
            <Text style={{ color: 'white', backgroundColor: '#3c3c3c', marginTop: 10, fontSize: 22 }}>In a nutshell, the term flora relates to all
             plant life and the term fauna represents all animal life.The term flora in Latin means “Goddess of the Flower.” 
             Flora is a collective term for a group of plant life found in a particular region.
             The whole plant kingdom is represented by this name.Fauna represents the animal life indigenous to a region.
             There are many explanations regarding the origin of the word. As per Roman mythology, Fauna or “Faunus” is 
             the name of the goddess of fertility. Another source is “Fauns” which means “Forest spirits.“</Text>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('ShipFrighter')}>
                <Text style={{ color: 'white', fontSize: 74, marginTop: 20, backgroundColor: '#3c3c3c' }}>Ship/Freighter</Text>
            </TouchableOpacity>
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