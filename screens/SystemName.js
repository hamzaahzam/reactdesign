import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import {Container} from 'native-base';

const SystemName = ({navigation}) => {
  return (
    <Container style={styles.background}> 
    <View style={{flexDirection:'row'}}>
            <Text style={{color:'white',fontSize:55,marginTop:10,backgroundColor:'#3c3c3c'}}>System Name</Text>
            <Image style={{marginTop:10,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </View>
            <Image style={{marginTop:10,height:'25%',width:'100%'}} source={require('../assets/gray.jpg')} />
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('PlanetName')}>
            <Text style={{color:'white',fontSize:60,marginTop:20,backgroundColor:'#3c3c3c'}}>Planet Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('PlanetName')}>
            <Text style={{color:'white',fontSize:60,marginTop:20,backgroundColor:'#3c3c3c'}}>Planet Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('PlanetName')}>
            <Text style={{color:'white',fontSize:60,marginTop:20,backgroundColor:'#3c3c3c'}}>Planet Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('SystemName')}>
            <Text style={{color:'white',fontSize:60,marginTop:20,backgroundColor:'#3c3c3c'}}>Planet Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('PlanetName')}>
            <Text style={{color:'white',fontSize:60,marginTop:20,backgroundColor:'#3c3c3c'}}>Planet Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity>
    </Container>
  );
};

export default SystemName;

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
    btn:{
        backgroundColor: '#8e8d8d',
        marginTop: 20,
        marginBottom: 50,
        borderRadius: 60,
        marginLeft: 10,
        marginRight: 10
    },
    bottomtext:{
      fontSize: 60,
      color: '#d1d0d0',
      textAlign: 'center',

    }
});