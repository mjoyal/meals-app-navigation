import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from '../data/dummy-data'; 
import CustomHeaderButton from '../components/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'; 
import MealList from '../components/MealList'

const FavouritesScreen = ({navigation}) => {
  const tempFaves = MEALS; 


  return (
    <MealList mealData={tempFaves} navigation={navigation}/> 
  );
};

FavouritesScreen.navigationOptions = navData => {
  
  return {
    headerTitle: "Favourites",
    headerLeft: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item 
        title="menu" 
        iconName='ios-menu' 
        onPress={() => {
          navData.navigation.toggleDrawer(); 
          console.log(navData.navigation)
       
        }}/>
    </HeaderButtons>
  )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavouritesScreen;
