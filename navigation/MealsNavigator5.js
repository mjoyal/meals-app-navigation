import React from 'react'
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'

// screens 

import CategoriesScreen from "../screens/CategoriesScreen";


const MyStack = createStackNavigator(); 

const AppNavigator = props => {

  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="Categories" component={CategoriesScreen}/>
      </MyStack.Navigator>
    </NavigationContainer>
  ); 
}; 



export default AppNavigator; 