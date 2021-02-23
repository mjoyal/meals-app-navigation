import React from 'react'
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons'
import CustomHeaderButton from '../components/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'; 

// screens 

import CategoriesScreen, { CategoriesScreenOptions } from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";

const MealsStackNavigator = createStackNavigator(); 

const MealsNavigator = () => {
  return (
    <MealsStackNavigator.Navigator>
      <MealsStackNavigator.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={CategoriesScreenOptions}
        />
      <MealsStackNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen}/>
      <MealsStackNavigator.Screen name="MealDetails" component={MealDetailsScreen}/>
    </MealsStackNavigator.Navigator>
  )
}; 




const AppNavigator = props => {

  return (
    <NavigationContainer>
     <MealsNavigator />
    </NavigationContainer>
  ); 
}; 



export default AppNavigator; 