import { BackButton, TitleCard } from '@/components/TitleCard';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import { Link } from "expo-router";

export default function landingPage3() {
    return (
        <View style={styles.background}>
            {BackButton()}
            {TitleCard()}

            <View>
                <Image 
                    style={{minWidth: "100%"}}
                    source={require('../assets/images/Rectangle_18.png')}
                />
            </View>

            <View>
                <Image 
                    style={{minWidth: "100%", marginTop:'-20vh'}}
                    source={require('../assets/images/Rectangle_19.png')}
                />
            </View>

            <View style = {{alignItems:'center', zIndex:10}}>
                <Link replace href={"/login"}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </Link>
            </View>


        </View>
        

    )
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