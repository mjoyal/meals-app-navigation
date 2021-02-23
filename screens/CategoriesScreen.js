import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from '../components/CategoryGridTile'; 
import CustomHeaderButton from '../components/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'; 
import Colors from "../constants/Colors";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile itemData={itemData} navigation={navigation}/>
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = navData => {
  
  return {
    headerTitle: "Meal Categories",
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
