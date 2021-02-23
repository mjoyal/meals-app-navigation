import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeaderButton from '../components/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'; 

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Filters Screen!</Text>
    </View>
  );
};


export const ScreenOptions = navData => {
  
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
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



export default FiltersScreen;
