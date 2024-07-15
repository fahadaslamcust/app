import React,{useState} from 'react';
import { Text, View, StyleSheet} from 'react-native'
import {colors} from '../utils/colors';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton';
export const Focus =({addSubject})=>{
  const [subject,setSubject]=useState(null);
  return(
  <View style={styles.container}>
  <View style={styles.inputcontainer}>
  <TextInput onChangeText={setSubject} label="enter your message" style={styles.textinput}/>
  <View style={styles.button}><RoundedButton title="enter" size={50} onPress={()=>addSubject(subject)}/></View>
  </View>
  </View>
  );
};
const styles =StyleSheet.create({
  container:{
    flex:1,
  },
  button:{
    justifyContent: 'center'
  },
  textinput:{
flex:1,
marginRight:10
  },
inputcontainer:{
padding:25,
justifyContent: 'top',
flexDirection: 'row'
},
})