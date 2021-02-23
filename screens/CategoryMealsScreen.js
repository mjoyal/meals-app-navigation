import React from "react";
import { CATEGORIES, MEALS } from '../data/dummy-data'; 


import MealList from '../components/MealList';

const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId: catId } = route.params; 

  // const catId = navigation.getParam('categoryId'); 
  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId); 
  }); 

  return (
   <MealList mealData={meals} navigation={navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId'); 
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId); 

  return {
    headerTitle: selectedCategory.title, 
  }
}; 



export default CategoryMealsScreen;

/**** REACT NAVIGATION 4 CONFIG  ****/