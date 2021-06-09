import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet,View, Image, BackHandler, Alert,BackAndroid} from 'react-native';
import {YeniButton} from './common';
import {Actions} from 'react-native-router-flux';




class Home extends Component{

  backAction = () => {
   Alert.alert("", "Çıkmak istediğinize emin misin?", [
     {
       text: "Cancel",
       onPress: () => null,
       style: "cancel"
     },
     { text: "YES", onPress: () => BackHandler.exitApp() }
   ]);
   return true;
 };

 componentDidMount() {
   this.backHandler = BackHandler.addEventListener(
     "hardwareBackPress",
     this.backAction
   );
 }

 componentWillUnmount() {
   this.backHandler.remove();
 }


  render(){
    return(

          /*Burada otel ve kafe seçeneğinin logosunu assest'ten alıyoruz ve onPress özelliği ekliyoruz.*/
          <ScrollView style={styles.HomeKonum}>
         <View style={styles.mainWrapper}>
         <View style={styles.ikinci}>
          <View style={styles.HomeWrapper}>
             <YeniButton onPress={Actions.hotel}
                  resim={require('../assest/hotel.png')}
            />
            <Text style={styles.deneme}>Otel/Apart</Text>
          </View>


          <View style={styles.HomeWrapper}>
          <YeniButton onPress={Actions.cafe}
                 resim={require('../assest/coffee-breaks.png')}
            />
            <Text style={styles.denemeCafe}>Kafeler</Text>
          </View>
          </View>


          <View style={styles.ikinci}>
          <View style={styles.HomeWrapper}>
          <YeniButton onPress={Actions.eglence}
            resim={require('../assest/funny.png')}
            />
          <Text style={styles.deneme}>Bar/Pub</Text>
          </View>


          <View style={styles.HomeWrapper}>
             <YeniButton onPress={Actions.restaurant}
              resim={require('../assest/seafood.png')}
            />
            <Text style={styles.deneme}>Lokantalar</Text>
          </View>
          </View>

    
          </View>



          <View style={styles.ikinci}>
          <View style={styles.HomeWrapper}>
          <YeniButton onPress={Actions.about}
             resim={require('../assest/about.png')}
            />
          <Text style={styles.deneme}>Hakkımızda</Text>
          </View>


          <View style={styles.HomeWrapper}>
          <YeniButton onPress={Actions.contact}
           resim={require('../assest/contact.png')}
            />
            <Text style={styles.deneme}>İletişim</Text>
          </View>
          </View>
          
          </ScrollView>

    )
  }
}


const styles=StyleSheet.create({
  HomeWrapper:{
    flex:1,
    alignItems:'center',

  },
  homeText:{
    fontSize:25,
    color:'white'
  },
  denemeCafe:{
    color:'#0c2622',
    fontSize:15,
  //  paddingLeft:50

  },
  HomeKonum:{
  flex:1,
  borderColor:'#E5E5E8',
	backgroundColor: '#E7D8EB',

  },
  ikinci:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:1,
    borderColor:'#E5E5E8',
    width:"100%",
    height:"100%",
    paddingHorizontal:8,


  },
  deneme:{
    color:'#0c2622',
    fontSize:15,
  //  paddingLeft:50
  },
  header:{
    textAlign:'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: '#423189'
  },
	headBackground: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: 50,
		width: '25%',
		backgroundColor: '#E5E5E8'
	},
  mainWrapper:{
    flex:1,
    paddingBottom:12
  }
})

export default Home;
