import React from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions, Drawer } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Menu from './components/Menu';
import Hotel from './components/hotel';
import Cafe from './components/cafe';
import Eglence from './components/eglence';
import Restaurant from './components/restaurant';



const RouterComp = () => {
  return (
    <Router titleStyle={{ color: '#423189' }}
      navigationBarStyle={{ backgroundColor: '#e0e0e0' }}>
      <Scene key='root' hideNavBar={true}>
        <Scene key='auth' hideNavBar={true}>
          <Scene key='login'
            component={LoginForm}
            title='Login'
            hideNavBar={true}
          />
        </Scene>

        <Scene key='main' headerLayoutPreset="center" >
          <Drawer
            key='drawerMenu'
            contentComponent={Menu}
            drawerPosition="right"
            drawerWidth={160}
            hideNavBar={true}
            drawerImage={require("./assest/app.png")}
            rightButtonIconStyle={{ width: 20, height: 20 }}
          >
            <Scene key='home'
              component={Home}
              title='Guide of My Country'
              navigationBarStyle={{ backgroundColor: '#DFCAE5' }}
              titleStyle={{ color: "black" }}
              leftButtonTextStyle={{ color: 'black' }}
            />


            <Scene key='about'
              component={About}
              title='Hakkımızda'
              onLeft={() => {
                Actions.home();
              }}
              leftTitle='Geri'
              navigationBarStyle={{ backgroundColor: '#DFCAE5' }}
              leftButtonTextStyle={{ color: 'black' }}
              titleStyle={{ color: "black" }}
            />


            <Scene key='contact'
              component={Contact}
              title='İletişim'
              onLeft={() => {
                Actions.home();
              }}
              leftTitle='Geri'
              navigationBarStyle={{ backgroundColor: '#DFCAE5' }}
              leftButtonTextStyle={{ color: 'black' }}
              titleStyle={{ color: "black" }}
            />

            <Scene key='hotel'
              component={Hotel}
              title='Otel/Apart'
              onLeft={() => {
                Actions.home();
              }}
              navigationBarStyle={{ backgroundColor: '#DFCAE5' }}
              leftTitle='Geri'
              leftButtonTextStyle={{ color: 'black' }}
            />

            <Scene key='cafe'
              component={Cafe}
              title='Kafeler'
              onLeft={() => {
                Actions.home();
              }}
              navigationBarStyle={{ backgroundColor: '#DFCAE5' }}
              leftTitle='Geri'
              leftButtonTextStyle={{ color: 'black' }}
            />


            <Scene key='eglence'
              component={Eglence}
              title='Eğlence Mekanları'
              onLeft={() => {
                Actions.home();
              }}
              navigationBarStyle={{ backgroundColor: '#DFCAE5' }}
              leftTitle='Geri'
              leftButtonTextStyle={{ color: 'black' }}
            />


            <Scene key='restaurant'
              component={Restaurant}
              title='Lokantalar'
              onLeft={() => {
                Actions.home();
              }}
              navigationBarStyle={{ backgroundColor: '#DFCAE5' }}
              leftTitle='Geri'
              leftButtonTextStyle={{ color: 'black' }}
            />




          </Drawer>
        </Scene>
      </Scene>
    </Router>

  )
}


export default RouterComp;
