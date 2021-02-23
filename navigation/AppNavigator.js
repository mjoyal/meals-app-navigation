import React from 'react'
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'

// screens 

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";

const MealsStackNavigator = createStackNavigator(); 

const MealsNavigator = () => {
  return (
    <MealsStackNavigator.Navigator>
      <MealsStackNavigator.Screen name="Categories" component={CategoriesScreen}/>
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