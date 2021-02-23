import React from 'react'; 
import {
  View,
  StyleSheet,
  Text
} from "react-native";


const InstructionItem = ({copy}) => {

  return (
  <View style={styles.screen}>
    <Text style={styles.text}>{copy}</Text>
  </View>
  ); 
}; 



const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    borderWidth: 1, 
    borderColor: '#ccc',
    margin: 5, 
    padding: 10, 
    width: 300
  },
  text: {
    textAlign: "left",
    fontSize: 12
  }
});

export default InstructionItem; 