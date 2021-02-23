import React from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


const CategoryGridTile = ({itemData, navigation}) => {
  return (
  <TouchableOpacity
    style={styles.gridItem}
    onPress={() => {
      navigation.navigate({ 
        routeName: "CategoryMeals", 
        params: { categoryId: itemData.item.id },
      });
    }}
  >
    <View style={{...styles.container, backgroundColor: itemData.item.color}}>
    
      <Text style={styles.text}>{itemData.item.title}</Text>
    </View>
  </TouchableOpacity>
  )
}; 


const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'grey', 
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2}, 
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
  text: {
    fontWeight: "700",
    fontSize: 14,
    color: 'blue'
  }
});

export default CategoryGridTile; 