import { BackButton, TitleCard } from '@/components/TitleCard';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

export default function landingPage2() {

  return (
    <View style={styles.background}>
        {BackButton()}
        {TitleCard()}

        <Image 
            style={{minWidth: "100%"}}
            source={require('../assets/images/Rectangle_13.png')}
        />

        <View style={{alignItems: 'center'}}>
            <Image source={require('../assets/images/logo.png')}/>
        </View>
      
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: '10vh', zIndex:10}}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
        </View>

        <Image
            style={{position: "absolute", minWidth: "100%", marginTop: "67vh"}}
            source={require('../assets/images/Rectangle_14.png')}
        />

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
    width:251,
    height:44,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor: '#80ED99',
  }
});