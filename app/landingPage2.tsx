import {StyleSheet, Text, View} from 'react-native';

export default function landingPage2() {
  return (
    <View style={styles.background}>
      <View style={styles.titleCard}>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.title}>Nutri</Text>
      </View>
      
    </View>    
  );
}


const styles = StyleSheet.create({
  background:{
    backgroundColor: "#758471",
    height:"100%"

  },
  titleCard:{
    marginLeft:"10%",
    marginTop:"10%"
  },
  title:{
    fontSize: 36,
    fontWeight: 'bold'
  },
  text:{
    fontSize: 36
  }
});