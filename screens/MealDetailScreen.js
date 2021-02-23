import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, Dimensions} from "react-native";
import { MEALS } from '../data/dummy-data'; 
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/HeaderButton'; 
import InstructionItem from '../components/InstructionItem'; 



const MealDetailsScreen = ({navigation, route}) => {
  const { mealId } = route.params; 
  const selectedMeal = MEALS.find(meal => meal.id === mealId); 

  const ingredients = selectedMeal.ingredients.map((ingredient) => {
    return <InstructionItem copy={ingredient}/>
  })
  const steps = selectedMeal.steps.map((step, index) => {
    return <InstructionItem copy={step} key={index}/>
  })
  

  return (
    <ScrollView contentContainerStyle={styles.screen}>
     <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
     <View style={styles.detailsBar}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text> 
      </View>
      <Text>Ingredients</Text>
      <View>
        {ingredients}
      </View>
      <Text>Steps</Text>
      <View>
        {steps}
      </View>
    </ScrollView>
  );
};

export const ScreenOptions = ({route}) => {

  const { mealId } = route.params; 
  const selectedMeal = MEALS.find(meal => meal.id === mealId); 
  
  return {
    headerTitle: selectedMeal.title, 
    headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="fave" iconName="ios-star" onPress={() => {console.log('Favourite!')}}/>
    </HeaderButtons>
    )
  }
}; 

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    alignItems: 'center'

  },
  image: {
    width: '100%', 
    height: 200, 
  },
  detailsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%', 
    padding: 15
  }
});

export default MealDetailsScreen;
