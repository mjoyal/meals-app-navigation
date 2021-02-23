import React from 'react'; 
import {
  View,
  StyleSheet,
  FlatList,

} from "react-native";

import MealCard from './MealCard'

const MealList = ({mealData, navigation}) => {
  const renderMealItem = (itemData) => {
    return(
     <MealCard itemData={itemData} navigation={navigation}/>
   )
  }; 

  return (
  <View style={styles.screen}>
    <FlatList data={mealData} renderItem={renderMealItem}/>
  </View>
  ); 
}; 


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20
  },
});

export default MealList; 