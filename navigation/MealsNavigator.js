import React from 'react'
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";
import FavouritesScreen from '../screens/FavouritesScreen'; 
import FiltersScreen from '../screens/FiltersScreen'; 

import Colors from '../constants/Colors';




// configure different screens
const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetails: {
    screen: MealDetailsScreen,
  },
}, {
  defaultNavigationOptions: defaultStackOptions
});

const FavouritesNavigator = createStackNavigator({
  Favourites: FavouritesScreen, 
  MealDetails: MealDetailsScreen
}, 
{
  defaultNavigationOptions: defaultStackOptions
}); 

const BottomTabNav = createBottomTabNavigator({
  Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarLabel: ' ',
    tabBarIcon: (tabInfo) => {
      return <Ionicons  name='ios-restaurant' size={25}  color={tabInfo.tintColor}/>
    }
  }}, 
  Favourites: {screen: FavouritesNavigator, navigationOptions: {
    tabBarLabel: ' ',
    tabBarIcon: (tabInfo) => {
      return <Ionicons  name='ios-star' size={25}  color={tabInfo.tintColor}/>
    }
  }}, 
},
{
  tabBarOptions: {
    activeTintColor: 'blue', 
  }
}); 

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
})

const MainNavigator = createDrawerNavigator({
  MealFavourites: {screen: BottomTabNav, navigationOptions: {
    drawerLabel: 'Meals'
  }}, 
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: 'blue'
  }
}); 


export default createAppContainer(MainNavigator);
