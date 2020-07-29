import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Container } from 'native-base';

const PlanetName = ({navigation}) => {
    return (
        <Container style={styles.background}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 55, marginTop: 10, backgroundColor: '#3c3c3c' }}>Planet/Moon {"\n"} Name</Text>
                <Text style={{color:'white',marginTop:10, fontSize:20}}>Biones {"\n"} Weather {"\n"} Sentineals</Text>
            </View>
            <Image style={{ marginTop: 10, height: '25%', width: '100%' }} source={require('../assets/gray.jpg')} />
            <Text style={{color:'white',backgroundColor: '#3c3c3c',marginTop:10,fontSize:22}}>The Moon is Earth's largest natural satellite, and we usually see it in the night sky. Some other planets also have moons or natural satellites.
            Our moon is about a quarter the size of the Earth. Because it is far away it looks small, about half a degree wide. The gravity on the moon is one-sixth 
            of the Earth's gravity. It means that something will be six times lighter on the Moon than on Earth. The Moon is a rocky and dusty place. The Moon moves
             slowly away from the earth at a rate of 3.8 cm per year, due to the effect of tidal dissipation.</Text>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('FaunaFlaura')}>
            <Text style={{color:'white',fontSize:82,marginTop:20,backgroundColor:'#3c3c3c'}}>Fauna/Flora</Text>
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