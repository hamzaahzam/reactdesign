import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Container} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PlanetName = ({navigation}) => {
  return (
    <Container style={styles.background}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'white',
              backgroundColor: '#3c3c3c',
              width: '75%',
              height: hp('10%'),
              padding: '1%',
              fontSize: 30,
            }}>
            Planet/Moon Name
          </Text>
          {/* <Image style={{height:hp('10%')}} source={require('../assets/gray.png')}/> */}
          <View style={{padding: '2%'}}>
            <Text style={{color: '#b7b7b7', fontSize: 18}}>Biomes</Text>
            <Text style={{color: '#b7b7b7', fontSize: 18}}>Weather</Text>
            <Text style={{color: '#b7b7b7', fontSize: 18}}>Sentinels</Text>
          </View>
        </View>

        {/* 
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{height:hp('15%'),width: wp('70%'),backgroundColor:'#3c3c3c'}}>
            <Text style={{ color: '#b7b7b7', fontSize: 55, backgroundColor: '#3c3c3c'}}>Planet/Moon {"\n"} Name</Text>
            </View>
            <View style={{height:hp('15%'),width: wp('30%')}}>
            <Text style={{color:'#b7b7b7',fontSize:20}}>Biones {"\n"} {"\n"} Weather {"\n"} {"\n"} Sentineals</Text>
            </View>
            </View> */}

        <Image
          style={{marginBottom: '2%', height: hp('25%'), width: wp('100%')}}
          source={require('../assets/gray.png')}
        />

        <View>
          <Text
            style={{
              padding: '2%',
              marginBottom: '2%',
              color: '#b7b7b7',
              backgroundColor: '#3c3c3c',
              fontSize: 20,
            }}>
            The Moon is Earth's largest natural satellite, and we usually see it
            in the night sky. Some other planets also have moons or natural
            satellites. Our moon is about a quarter the size of the Earth.
            Because it is far away it looks small, about half a degree wide. The
            gravity on the moon is one-sixth of the Earth's gravity. It means
            that something will be six times lighter on the Moon than on Earth.
            The Moon is a rocky and dusty place. The Moon moves slowly away from
            the earth at a rate of 3.8 cm per year, due to the effect of tidal
            dissipation.
          </Text>
        </View>
        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: '5%', marginBottom: '2%'}}
          onPress={() => navigation.navigate('FaunaFlaura')}>
          <Text
            style={{
              color: '#b7b7b7',
              fontSize: 40,
              textAlign: 'center',
              backgroundColor: '#3c3c3c',
              width: wp('80%'),
              borderRadius: 30,
            }}>
            Fauna/Flora
          </Text>
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
    marginBottom: 25,
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
    marginRight: 10,
  },
  bottomtext: {
    fontSize: 60,
    color: '#d1d0d0',
    textAlign: 'center',
  },
});
