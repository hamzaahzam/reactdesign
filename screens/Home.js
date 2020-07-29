import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,TextInput,Image,Button,ScrollView} from 'react-native';
import {Container,Input,Icon,Thumbnail} from 'native-base';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
const toggleModal = () => {
    setModalVisible(!isModalVisible);
};


const [photo, setPhoto] = useState(null);


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
  return (
    <Container style={styles.background}> 
    <ScrollView>
    <View style={{flexDirection:'row'}}>
        <View style={styles.searchview}>
            <TextInput style={styles.searchbar} placeholder="Enter Your Text Here"/>
            <Thumbnail style={styles.searchicon} source={require('../assets/search.png')}/>
        </View>
        <View style={{width: wp('30%'),height: hp('9%')}}>
            <Text style={{fontSize:26,color:'white',textAlign:'center'}}>
                Systems {"\n"} Logged {"\n"} ###
            </Text>
        </View>
    </View>
 
 
        <TouchableOpacity style={{height: hp('8%'),marginLeft:20,backgroundColor:'white',width: wp('70%'),marginTop:20,}} onPress={toggleModal}>
            <Text style={{fontSize:55,color:'black',textAlign:'center',width: wp('70%'),height: hp('8%')}}>Add System</Text>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <TextInput style={{fontSize:30,borderWidth:1,textAlign:'center',borderColor:'white',borderRadius:25,marginTop:10,marginBottom:10}}
            placeholder="Enter System Name" placeholderTextColor='white'/>
            <View style={{alignItems: 'center'}}>
        {photo && (
          <Image source={{uri: photo}} style={{width: 200, height: 200}} />
        )}
          <Image style={{height:100, width:100,marginTop:10,alignSelf:'center'}}
            source={require('../assets/AddImage.png')}/>
        <Text style={{fontSize:33,color:'white',marginBottom:30}} onPress={handleChoosePhoto}>Add Image</Text>
        
      </View>
            
            <Button title="Upload" onPress={toggleModal} />
          </View>
        </Modal>
  
    
            <TouchableOpacity style={{flexDirection:'row',marginTop:20}} onPress={()=> navigation.navigate('SystemName')}>
            <View style={{height:hp('9%'),width: wp('73%'),backgroundColor:'#3c3c3c'}}>
            <Text style={{color:'white',fontSize:50,textAlign:'center'}}>System Name</Text>
            </View>
            <View style={{height:hp('9%'),width: wp('27%')}}>
            <Image style={{height:hp('9%'),width: wp('27%')}} source={require('../assets/gray.jpg')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginTop:10}} onPress={()=> navigation.navigate('SystemName')}>
            <View style={{height:hp('9%'),width: wp('73%'),backgroundColor:'#3c3c3c'}}>
            <Text style={{color:'white',fontSize:50,textAlign:'center'}}>System Name</Text>
            </View>
            <View style={{height:hp('9%'),width: wp('27%')}}>
            <Image style={{height:hp('9%'),width: wp('27%')}} source={require('../assets/gray.jpg')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginTop:10}} onPress={()=> navigation.navigate('SystemName')}>
            <View style={{height:hp('9%'),width: wp('73%'),backgroundColor:'#3c3c3c'}}>
            <Text style={{color:'white',fontSize:50,textAlign:'center'}}>System Name</Text>
            </View>
            <View style={{height:hp('9%'),width: wp('27%')}}>
            <Image style={{height:hp('9%'),width: wp('27%')}} source={require('../assets/gray.jpg')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginTop:10}} onPress={()=> navigation.navigate('SystemName')}>
            <View style={{height:hp('9%'),width: wp('73%'),backgroundColor:'#3c3c3c'}}>
            <Text style={{color:'white',fontSize:50,textAlign:'center'}}>System Name</Text>
            </View>
            <View style={{height:hp('9%'),width: wp('27%')}}>
            <Image style={{height:hp('9%'),width: wp('27%')}} source={require('../assets/gray.jpg')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginTop:10}} onPress={()=> navigation.navigate('SystemName')}>
            <View style={{height:hp('9%'),width: wp('73%'),backgroundColor:'#3c3c3c'}}>
            <Text style={{color:'white',fontSize:50,textAlign:'center'}}>System Name</Text>
            </View>
            <View style={{height:hp('9%'),width: wp('27%')}}>
            <Image style={{height:hp('9%'),width: wp('27%')}} source={require('../assets/gray.jpg')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginTop:10}} onPress={()=> navigation.navigate('SystemName')}>
            <View style={{height:hp('9%'),width: wp('73%'),backgroundColor:'#3c3c3c'}}>
            <Text style={{color:'white',fontSize:50,textAlign:'center'}}>System Name</Text>
            </View>
            <View style={{height:hp('9%'),width: wp('27%')}}>
            <Image style={{height:hp('9%'),width: wp('27%')}} source={require('../assets/gray.jpg')}/>
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
      searchview:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'flex-start',
        height: hp('9%'),
        width: wp('70%'),
        marginTop: 10,
        marginLeft: 20
      },
      searchbar: { 
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        borderColor:'black',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: 'white',
        width: wp('50%'),
        height: hp('5%')
      },
      searchicon:{
          marginLeft:5,
          marginBottom:10,
          marginTop: 10,
          width:wp('10%'),
          height: hp('5%')
      }
        
});