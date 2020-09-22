import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Button
} from 'react-native';
import {Container, Input, Icon, Thumbnail} from 'native-base';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import database from '@react-native-firebase/database';



const Home = ({navigation}) => {


  // const newReference = database()
  // .ref('/users')
  // .push();
  // console.log('Auto generated key: ', newReference.key);
  // newReference
  // .set({
  //   age: 32,
  // })
  // .then(() => console.log('Data updated.'));




  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [photo, setPhoto] = useState(null);
  const [mylist, setMylist] = useState([]);

  // useEffect(() => {
  //   const mydata = database().ref("systemdata");
  //   mydata.on('value', datasnpshot=>{
  //     if(datasnpshot.val()){
  //       setMylist(Object.values(datasnpshot.val()))
  //     }
  //   })
  // });

  const saveitem = () => {
    console.log('Chala')
    const mydata = database().ref('systemdata');
    mydata.push().set({
      text: 'Huzam',
      time: Date.now()
    })
  }

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setPhoto(response.uri);
      }
    });
  };

  console.log(mylist)
  
  return (
    <Container style={styles.background}>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.searchview}>
            <TextInput
              style={styles.searchbar}
              placeholder="Your Text Here"
            />
            <Thumbnail
              style={styles.searchicon}
              source={require('../assets/search.png')}
            />
          </View>
          <View style={{marginLeft: '2%', marginRight: '2%'}}>
            <Text style={{fontSize: hp('3%'), color: 'white',textAlign:'center'}}>Systems</Text>
            <Text style={{fontSize: hp('3%'), color: 'white',textAlign:'center'}}>Logged</Text>
            <Text style={{fontSize: hp('3%'), color: 'white', textAlign: 'center'}}>
              08
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: wp('65%'),
            height: hp('8%'),
            marginBottom: '5%',
          }}
          onPress={toggleModal}>
          <Text
            style={{
              fontSize: hp('4%'),
              color: 'black',
              textAlign: 'center',
              paddingTop: '4%',
            }}>
            Add System
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: wp('65%'),
            height: hp('8%'),
            marginBottom: '5%',
          }}
          onPress={saveitem}>
          <Text
            style={{
              fontSize: hp('4%'),
              color: 'black',
              textAlign: 'center',
              paddingTop: '4%',
            }}>
            System
          </Text>
        </TouchableOpacity>

        <Modal style={{ width: '90%', height: '60%', backgroundColor: 'gray', alignItems: 'center', marginTop: '40%', borderRadius: 40, position: 'absolute' }} isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <TextInput style={{width: 250, fontSize:14,borderWidth:1,textAlign:'center',borderColor:'white',borderRadius:10,marginTop:'10%'}}
            placeholder="Enter System Name" placeholderTextColor='white'/>
            <View style={{alignItems: 'center'}}>
              {photo && (
                <Image source={{uri: photo}} style={{width: 200, height: 200}} />
              )}
                <Image style={{height:100, width:100,marginTop:10,alignSelf:'center'}}
                  source={require('../assets/AddImage.png')}/>
              <Text style={{fontSize:33,color:'white',marginBottom:30}} onPress={handleChoosePhoto}>Add Image</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Button title="Upload" color="#3c3c3c" />
            </View>
            <View>
              <Button title="Close" onPress={toggleModal} />
            </View>
          </View>
        </Modal>

        {/* <TouchableOpacity style={{flexDirection:'row',marginTop:20}} onPress={()=> navigation.navigate('SystemName')}>
            <View style={{height:hp('9%'),width: wp('73%'),backgroundColor:'#3c3c3c'}}>
            <Text style={{color:'white',fontSize:50,textAlign:'center'}}>System Name</Text>
            </View>
            <View style={{height:hp('9%'),width: wp('27%')}}>
            <Image style={{height:hp('9%'),width: wp('27%')}} source={require('../assets/gray.png')}/>
            </View>
            </TouchableOpacity> */}
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('SystemName')}>
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
              System Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('SystemName')}>
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
              System Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('SystemName')}>
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
              System Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('SystemName')}>
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
              System Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('SystemName')}>
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
              System Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('SystemName')}>
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
              System Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('SystemName')}>
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
              System Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: '2%'}}
          onPress={() => navigation.navigate('SystemName')}>
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
              System Name
            </Text>
            <Image
              style={{height: '100%', width: '30%'}}
              source={require('../assets/gray.png')}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
  },
  searchview: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('10%'),
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  searchbar: {
    borderWidth: 1,
    borderRadius: 30,
    width: wp('50%'),
    height: hp('7%'),
  },
  searchicon: {
    marginLeft: 5,
    width: wp('10%'),
    height: hp('5%'),
  },
});
