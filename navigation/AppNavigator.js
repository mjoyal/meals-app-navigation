import React from 'react'
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons'
import CustomHeaderButton from '../components/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'; 
import Colors from '../constants/Colors';

// screens 

import CategoriesScreen, { ScreenOptions as CategoriesScreenOptions } from "../screens/CategoriesScreen";
import CategoryMealsScreen, { ScreenOptions as CategoryMealsScreenOptions } from "../screens/CategoryMealsScreen";
import MealDetailsScreen, { ScreenOptions as MealDetailScreenOptions } from "../screens/MealDetailScreen";

const MealsStackNavigator = createStackNavigator(); 

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




const AppNavigator = props => {

  return (
    <NavigationContainer>
     <MealsNavigator />
    </NavigationContainer>
  ); 
}; 



export default AppNavigator; 