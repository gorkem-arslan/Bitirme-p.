import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class About extends Component{
  render(){
    return(

          <View style={styles.HomeWrapper}>
          <Text style={styles.homeText}>
        Guide of My Country uygulaması sizleri gittiğiniz veya bulunduğunuz yerlerde,
        sizler için önem arz ettiğini düşündüğümüz alanların ve mekanların
        daha kolay bulunabilmesi, sizi bir yükten kurtarmak ve sizleri rahat
        bir seyahat sağlamak amacıyla geliştirilmiş bir uygulamadır.
        Misyon olarak kullanıcı odaklı ve  ücretsiz olarak piyasaya sürülmüş
        olan bu uygulama yine sizlerin desteği ile büyüyecektir.
        Uygulama içerisinde iyi eğlenceler ve güzel seyahatler dileriz.
          </Text>

          

          </View>

    )
  }
}


const styles=StyleSheet.create({
  HomeWrapper:{
    flex:1,
    paddingTop:20,
    backgroundColor:'#E7D8EB'
  },
  homeText:{
    fontSize:15,
    maxWidth:400,
    color:'black',
    paddingLeft:14,
    paddingRight:7,
    paddingTop:20,
    fontWeight:"bold"
  }
})

export default About;
