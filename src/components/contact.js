import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Profil extends Component{
  render(){
    return(

          <View style={styles.HomeWrapper}>
          <Text style={styles.homeText}>
          Uzun uğraşlar sonucu hayata geçirmiş olduğumuz Guide of My Country
          uygulamasında elbet ki belli hatalar ile karşılaşabilirsiniz.
          Bu hataların giderilmesi için bizlere ulaşmak isteyen sayın
          kullanıcılarımız bizlere
          aşağıda yer alan
          ihbar hatlarından 7/24 ulaşabilirler, sizlerin görüşleri ve
          yardımları bizim için önemlidir.  
          
          
          </Text>
          <Text style={styles.homeText}>Kurucu: Görkem Arslan</Text>
          <Text style={styles.homeText}>
          E-mail: gorkemarslann96@gmail.com
          </Text>
          <Text style={styles.homeText}>Instagram: grkm.arslan</Text>
          

       
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

export default Profil;
