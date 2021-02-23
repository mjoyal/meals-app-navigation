import React from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground, 
  Dimensions
} from "react-native";


const MealCard = ({itemData, navigation}) => {
  const image = {uri: itemData.item.imageUrl}; 
  return (
    <TouchableOpacity 
    onPress={() => {
      navigation.navigate({
        routeName: 'MealDetails', 
        params: { mealId: itemData.item.id }
      })
    }}
    styles={styles.mealCard}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.titleText}>
          {itemData.item.title}
        </Text>
      </ImageBackground>
      <View style={styles.detailsBar}>
        <Text>{itemData.item.duration}m</Text>
        <Text>{itemData.item.complexity.toUpperCase()}</Text>
        <Text>{itemData.item.affordability.toUpperCase()}</Text> 
      </View>
  </TouchableOpacity>
  ); 
}; 


const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end", 
    width: Dimensions.get('window').width * 0.95, 
    height: 150
  },
  titleText: {
    color: 'white', 
    fontWeight: '700', 
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10, 
    textAlign: 'center',
    fontSize: 16
  }, 
  detailsBar: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F0F0F0',
    padding: 5
  }
});

export default MealCard; 