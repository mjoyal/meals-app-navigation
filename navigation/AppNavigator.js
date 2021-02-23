import React from 'react'
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons'
import CustomHeaderButton from '../components/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'; 
import Colors from '../constants/Colors';

// screens 

import CategoriesScreen, { ScreenOptions as CategoriesScreenOptions } from "../screens/CategoriesScreen";
import CategoryMealsScreen, { ScreenOptions as CategoryMealsScreenOptions } from "../screens/CategoryMealsScreen";
import MealDetailsScreen, { ScreenOptions as MealDetailScreenOptions } from "../screens/MealDetailScreen";
import FavouritesScreen from '../screens/FavouritesScreen'; 
import FiltersScreen from '../screens/FiltersScreen'; 



const MealsStackNavigator = createStackNavigator(); 
const BottomTabNavigator = createBottomTabNavigator(); 
const FavouritesStackNavigator = createStackNavigator(); 
const FilterStackNavigator = createStackNavigator(); 
const MainDrawerNavigator = createDrawerNavigator();


const defaultStackOptions = {
  headerStyle: {
    backgroundColor: Colors.mainWhite,
  },
  headerTintColor: 'blue',
}

const MealsNavigator = () => {
  return (
    <MealsStackNavigator.Navigator 
      screenOptions={defaultStackOptions}
    >
      <MealsStackNavigator.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={CategoriesScreenOptions}
        />
      <MealsStackNavigator.Screen 
        name="CategoryMeals" 
        component={CategoryMealsScreen}
        options={CategoryMealsScreenOptions}
      />
      <MealsStackNavigator.Screen 
        name="MealDetails" 
        component={MealDetailsScreen}
        options={MealDetailScreenOptions}
      />
    </MealsStackNavigator.Navigator>
  )
}; 

const FavouritesNavigator = () => {
 return (
  <FavouritesStackNavigator.Navigator>
    <FavouritesStackNavigator.Screen name="Favourites" component={FavouritesScreen}/>
    <FavouritesStackNavigator.Screen name="MealDetails" component={MealDetailsScreen}/>
  </FavouritesStackNavigator.Navigator>
 )
}; 

const FiltersNavigator = () => {
  return (
    <FilterStackNavigator.Navigator>
      <FilterStackNavigator.Screen name="Filters" component={FiltersScreen}/>
    </FilterStackNavigator.Navigator>
  )
}
const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name="MealsNavigator" component={MealsNavigator}/>
      <BottomTabNavigator.Screen name="FavouritesNavigator" component={FavouritesNavigator}/>
    </BottomTabNavigator.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <MainDrawerNavigator.Navigator>
      <MainDrawerNavigator.Screen name="MealFavourites" component={TabNavigator}/>
      <MainDrawerNavigator.Screen name="Filters" component={FiltersNavigator}/>
    </MainDrawerNavigator.Navigator>
  )
}

const AppNavigator = props => {

  return (
    <NavigationContainer>
     <MainNavigator />
    </NavigationContainer>
  ); 
}; 



export default AppNavigator; 