import React from "react";
import { CATEGORIES, MEALS } from '../data/dummy-data'; 


import MealList from '../components/MealList';

const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId: catId} = route.params; 

  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId); 
  }); 

  return (
   <MealList mealData={meals} navigation={navigation}/>
  );
};

export const ScreenOptions = ({navData, route}) => {
  const { categoryId: catId } = route.params; 
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId); 
  
  return {
    headerTitle: selectedCategory.title, 
  }
}; 



export default CategoryMealsScreen;

/**** REACT NAVIGATION 4 CONFIG  ****/