import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card =()=>{
    return(
    <View style={styles.card}>
  <View style={styles.imageWrapper}>
    <Image 
    source={{uri:'https://www.baronmethod.com/wp-content/uploads/2017/03/submit_news.jpg'}}
   // source={require('../../assets/news.jpg')} 
    style={styles.image}
    />
  </View>
     <View style={styles.titleWrapper} >
      <Text style={styles.title} >Dummy Title</Text>
      <MaterialIcons name="favorite-border" color="#72bcd4" size={24}/>
      </View>
      <View style={styles.descriptionWrapper}>
      <Text style={styles.description}>This is a dummy description</Text>
      </View>
     </View>
    );
}
const styles = StyleSheet.create({
  card:{
    backgroundColor:'white',
    height:300,
    margin:20,
    borderRadius:10,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    elevation:5
  },
  image:{
height:'100%',
width:'100%'
  },
  imageWrapper:{
    width:'100%',
    height:'60%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow:'hidden'
  },
  titleWrapper:{
    height:'10%',
    paddingHorizontal:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    marginTop:10
  },
  title:{
fontFamily:'Ubuntu-Bold',
fontSize:20,

  },
  description:{
fontFamily:'Ubuntu',
fontSize:15,
marginTop:10
  },
  descriptionWrapper:{
    paddingHorizontal:15
  },
});


export default Card;


