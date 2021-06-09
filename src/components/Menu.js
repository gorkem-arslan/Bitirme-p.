import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

function onPress() {
  firebase.auth().signOut();
  Actions.auth();
}

export default function Menu() {
  return (
    <ScrollView style={styles.menuTry}>
      <TouchableOpacity onPress={Actions.home}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/homepage.png')}
          />
          <Text style={styles.menu}>Ana Sayfa</Text>
        </View>
      </TouchableOpacity>    

      <TouchableOpacity onPress={Actions.hotel}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/hotel.png')}
          />
          <Text style={styles.menu}>Otel/Apart</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={Actions.cafe}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/coffee.png')}
          />
          <Text style={styles.menu}>Kafeler</Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={Actions.eglence}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/funny.png')}
          />
          <Text style={styles.menu}>Bar/Pub</Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={Actions.restaurant}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/seafood.png')}
          />
          <Text style={styles.menu}>Lokantalar</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={Actions.about}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/about.png')}
          />
          <Text style={styles.menu}>Hakkımızda</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={Actions.contact}>
        <View style={styles.menuWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/contact.png')}
          />
          <Text style={styles.menu}>İletişim</Text>
        </View>
      </TouchableOpacity>

   


      <TouchableOpacity onPress={onPress}>
        <View style={styles.logoutWrapper}>
          <Image
            style={styles.picture}
            source={require('../assest/logout.png')}
          />
          <Text style={styles.menu}>Çıkış Yap</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menu: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#423189',
    paddingBottom: 12,
  },
  cikisButton: {
    paddingTop: 100,
  },
  menuTry: {
    paddingTop: 20,
  },
  logoutWrapper: {
    flexDirection: 'row',
  },
  picture: {
    width: 20,
    height: 20,
    paddingLeft: 10,
    marginLeft: 10,
  },
  menuWrapper: {
    flexDirection: 'row',
  },
});
