import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Container} from 'native-base';

const Home = (props) => {
  return (
    <Container style={styles.background}> 
    <View>
      <Text style={styles.TopText}> System Name</Text>
    </View>
    <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>
            Add Entry
        </Text>
    </TouchableOpacity>
    <View>
      <Text style={styles.bottomtext}>
        Dominant Life Conflict Level Economy Economy Tier Planet
      </Text>
    </View>
    </Container>
  );
};

export default Home;

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