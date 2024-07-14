import {BackButton, TitleCard } from '@/components/TitleCard';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import { Link } from "expo-router";

export default function login() {

    return (
        <View style={styles.background}>
            {BackButton()}
            {TitleCard()}
        </View>
    );
  }

  const styles=StyleSheet.create({
    background:{
      backgroundColor:"#758471",
      height:"100%"
    },
    buttonText:{
      fontSize:24,
      },
    button:{
        marginBottom:"3vh",
        width:251,
        height:44,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor: '#80ED99',
    }
  });