import {Image, Pressable, Button , StyleSheet, Text, View,} from "react-native";
import React from 'react';

import { TextInput } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default function Index() {
  const [text, username] = React.useState('');
  const [value, password] = React.useState('');

  return (
    <View style={styles.background}>
      <Text>Email</Text>
      <TextInput
        onChangeText={username}
        value={text}
      />

      <Text>Password</Text>
      <TextInput
        onChangeText={password}
        value={value}
      />
      
      <Button onPress={signup(username,password)} title="Submit"></Button>
    </View>    
    
  );
}

function signup(email, password){
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}


const styles = StyleSheet.create({
  background:{
    backgroundColor: "#758471",
    height:"100%"
  },
  button:{
    marginBottom:"3vh",
        width:251,
        height:44,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor: '#80ED99',
  },
  buttonText:{
    fontSize:24,
    },
});