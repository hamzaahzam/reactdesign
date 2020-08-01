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

const SystemName = ({navigation}) => {
  return (
    <Container style={styles.background}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // justifyContent: 's',
          }}>
          <Text
            style={{
              color: 'white',
              backgroundColor: '#3c3c3c',
              height: hp('9%'),
              width: '70%',
              textAlign: 'center',
              paddingTop: '4%',
              fontSize: hp('4%'),
            }}>
            System Name
          </Text>
            <View style={{ paddingLeft: '4%', paddingTop: '1%'}}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/economy1.png')}
            />
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/conflict1.png')}
            />
            </View>
            <View style={{ paddingLeft: '4%', paddingTop: '1%'}}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/race1.png')}
            />
            </View>
        </View>
        {/* <View style={{flexDirection:'row',marginTop:10}}>
          <View style={{height:hp('9%'),width: wp('73%'),backgroundColor:'#3c3c3c'}}>
          <Text style={{color:'white',fontSize:50,textAlign:'center'}}>System Name</Text>
          </View>
          <View style={{height:hp('9%'),width: wp('27%')}}>
          <Image style={{height:hp('9%'),width: wp('27%')}} source={require('../assets/gray.png')}/>
          </View>
          </View> */}
        <Image
          style={{
            marginTop: '2%',
            height: hp('25%'),
            width: wp('100%'),
            marginBottom: '2%',
          }}
          source={require('../assets/gray.png')}
        />

        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('PlanetName')}>
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
                height: hp('9%'),
                width: '70%',
                textAlign: 'center',
                paddingTop: '4%',
                fontSize: hp('4%'),
              }}>
              Planet Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('Moon')}>
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
                height: hp('9%'),
                width: '70%',
                textAlign: 'center',
                paddingTop: '4%',
                fontSize: hp('4%'),
              }}>
              Moon Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('PlanetName')}>
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
                height: hp('9%'),
                width: '70%',
                textAlign: 'center',
                paddingTop: '4%',
                fontSize: hp('4%'),
              }}>
              Planet Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('Moon')}>
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
                height: hp('9%'),
                width: '70%',
                textAlign: 'center',
                paddingTop: '4%',
                fontSize: hp('4%'),
              }}>
              Moon Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        

        {/* <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=> navigation.navigate('PlanetName')}>
            <View style={{height:hp('10%'),width: wp('73%'),backgroundColor:'#3c3c3c'}}>
            <Text style={{color:'white',fontSize:55,textAlign:'center'}}>Planet Name</Text>
            </View>
            <View style={{height:hp('10%'),width: wp('27%')}}>
            <Image style={{height:hp('10%'),width: wp('27%')}} source={require('../assets/gray.png')}/>
            </View>
            </TouchableOpacity> */}
      </ScrollView>
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
