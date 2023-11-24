import React from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";


const FavoriteScreen = ({navigation}) => {
  
  const favMeals=useSelector(state=>state.meals.favoriteMeals)
  
  return (
    
    <MealList listData={favMeals} navigation={navigation}/>
  );
};

export default FavoriteScreen;
