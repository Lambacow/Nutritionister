import {Image, Pressable , StyleSheet, Text, View,} from "react-native";
import { Link } from "expo-router";

import { TitleCard } from '@/components/TitleCard';
export default function Index() {
  return (
    <View style={styles.background}>
      {TitleCard()}
      <Image
        style= {{position:"absolute",zIndex:1,minWidth:"100%"}}
        source={require('../assets/images/Rectangle_6.png')}
      />

      <View style={{alignItems:"center",marginTop:"15vh",marginBottom:"2vh"}}>
        <Image
          style= {{zIndex:-1}}
          source={require('../assets/images/logo.png')}   
        />
      </View>

      <View style={{alignItems:"center"}}>
        <Text style={{textAlign:'center',width:"50%",color:"#FFFFFF"}}>
          Start keeping track of your daily intake
        </Text>
      </View>

      <View style={{alignItems:"center",marginTop:"10vh",zIndex:2}}>
        <Link replace href={"/landingPage2"}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
        </Link>
      </View>

      <Image
        style= {{zIndex:1,minWidth:"100%",position:'relative',flex:2}}
        source={require('../assets/images/Rectangle_5.png')}
      />
      
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