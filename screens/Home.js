import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,TextInput,Image,Button} from 'react-native';
import {Container,Input,Icon,Thumbnail} from 'native-base';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';

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
    <View style={{flexDirection:'row'}}>
        <View style={styles.searchview}>
            <TextInput style={styles.searchbar} placeholder="                                                             "/>
            <Thumbnail style={styles.searchicon} source={require('../assets/search.png')}/>
        </View>
        <View style={{marginLeft: 20}}>
            <Text style={{fontSize:30,color:'white',textAlign:'center'}}>
                Systems {"\n"} Logged {"\n"} ###
            </Text>
        </View>
    </View>
 
 
        <TouchableOpacity style={{height:'6%',marginLeft:20,backgroundColor:'white',width:'65%'}} onPress={toggleModal}>
            <Text style={{fontSize:30,color:'black',textAlign:'center'}}>Add System</Text>
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
  
    
        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('SystemName')}>
            <Text style={{color:'white',fontSize:55,marginTop:20,backgroundColor:'#3c3c3c'}}>System Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity> 
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('SystemName')}>
            <Text style={{color:'white',fontSize:55,marginTop:20,backgroundColor:'#3c3c3c'}}>System Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('SystemName')}>
            <Text style={{color:'white',fontSize:55,marginTop:20,backgroundColor:'#3c3c3c'}}>System Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('SystemName')}>
            <Text style={{color:'white',fontSize:55,marginTop:20,backgroundColor:'#3c3c3c'}}>System Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('SystemName')}>
            <Text style={{color:'white',fontSize:55,marginTop:20,backgroundColor:'#3c3c3c'}}>System Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('SystemName')}>
            <Text style={{color:'white',fontSize:55,marginTop:20,backgroundColor:'#3c3c3c'}}>System Name</Text>
            <Image style={{marginTop:20,height:80,width:110}} source={require('../assets/gray.jpg')}/>
            </TouchableOpacity>
        
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
        height: '70%',
        width:'65%',
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
        backgroundColor: 'white'
      },
      searchicon:{
          marginBottom:10,
          marginTop: 10,
          width:40,
          height: 40
      }
        
});