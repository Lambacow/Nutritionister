import { View, type ViewProps } from 'react-native';

import {Button, StyleSheet, Text} from 'react-native';


export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function TitleCard() {
  return (
    <View style={styles.titleCard}>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.title}>Nutri</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titleCard:{
    marginLeft:"10%",
    marginTop:"10%",
    color:"#FFFFFF"
  },
  title:{
    fontSize: 36,
    fontWeight: 'bold'
  },
  text:{
    fontSize: 36
  }
});