import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";



const FavoriteScreen = ({navigation}) => {
  const favMeals=MEALS.filter(meal=>meal.id==='m1' || meal.id==='m2')
  
  return (
    
    <MealList listData={favMeals} navigation={navigation}/>
  );
};

export default FavoriteScreen;