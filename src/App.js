import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LoginForm from './components/loginForm';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './router';



const firebaseConfig = {
  apiKey: "AIzaSyC1joGrjLijVyUeiJliFClZ_NFEmZNx6UM",
  authDomain: "bitirme-2df58.firebaseapp.com",
  projectId: "bitirme-2df58",
  storageBucket: "bitirme-2df58.appspot.com",
  messagingSenderId: "496360699844",
  appId: "1:496360699844:web:25028aedbdfd042b571691",
  measurementId: "G-BLZSFRSF3T"
};
firebase.initializeApp(firebaseConfig);

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}
else {
  console.log("error");
}



export default class GuideOfMyCountry extends Component{


  render(){
    const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router/>
       </Provider>

      )
  }
}
//console.disableYellowBox = true;/*sarı uyarıyı kaldırdık*/