import { Pressable, View, type ViewProps } from 'react-native';
import { Link } from "expo-router";

import { StyleSheet, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function BackButton(){
  return(
    <Link style={{marginLeft:"10vw",marginTop:"5vh", marginBottom:"-8vh", zIndex:11}} replace href="\">
      <Pressable>
      <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
    </Link>
  )
}

export function TitleCard() {
  return (
    <View style={{zIndex:10}}>      
      <View style={styles.titleCard}>
          <Text style={styles.text}>Welcome to</Text>
          <Text style={styles.title}>Nutri</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titleCard:{
    marginLeft:"10%",
    marginTop:"35%",
  },
  title:{
    fontSize: 36,
    fontWeight: 'bold',
    color:"#FFFFFF",
  },
  text:{
    fontSize: 36,
    color:"#FFFFFF",
  }
});