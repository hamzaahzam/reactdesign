import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView} from 'react-native';
import { Container } from 'native-base';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const PlanetName = ({ navigation }) => {
    return (
        <Container style={styles.background}>
            <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 10, backgroundColor: '#3c3c3c',height: hp('15%'),width: wp('100%')}}>
                <Text style={{ color: '#b7b7b7', fontSize: 57 }}>Fauna/Flora {"\n"} Name</Text>
            </View>
            <Image style={{ marginTop: 5, height: hp('25%'), width: wp('100%') }} source={require('../assets/gray.jpg')} />
            <Text style={{ color: '#b7b7b7', backgroundColor: '#3c3c3c', marginTop: 5, fontSize: 20 }}>In a nutshell, the term flora relates to all
             plant life and the term fauna represents all animal life.The term flora in Latin means “Goddess of the Flower.” 
             Flora is a collective term for a group of plant life found in a particular region.
             The whole plant kingdom is represented by this name.Fauna represents the animal life indigenous to a region.
             There are many explanations regarding the origin of the word. As per Roman mythology, Fauna or “Faunus” is 
             the name of the goddess of fertility. Another source is “Fauns” which means “Forest spirits.“</Text>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5, backgroundColor: '#3c3c3c',height: hp('9%'),width: wp('100%') }} onPress={() => navigation.navigate('ShipFrighter')}>
                <Text style={{ color: '#b7b7b7', fontSize: 55 }}>Ship/Freighter</Text>
            </TouchableOpacity>
            </ScrollView>
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