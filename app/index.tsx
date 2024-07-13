import {Image, Pressable , StyleSheet, Text, View,} from "react-native";
import { Link } from "expo-router";

import { TitleCard } from '@/components/TitleCard';
export default function Index() {
  return (
    <View style={styles.background}>
      {TitleCard()}

      <View style={{alignItems:"center",marginTop:"10vh",marginBottom:"20vh"}}>
        <Image
          source={require('../assets/images/logo.png')}
        />
      </View>

      <View style={{alignItems:"center"}}>
        <Link replace href={"/landingPage2"}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
        </Link>
      </View>
    </View>    
  );
}



const styles = StyleSheet.create({
  background:{
    backgroundColor: "#758471",
    height:"100%"
  },
  button:{
    borderRadius:10,
    paddingVertical:"2vh",
    paddingHorizontal:"15vw",
    backgroundColor:"#80ED99",
  },
  buttonText:{
    alignItems:"center",
  }
});