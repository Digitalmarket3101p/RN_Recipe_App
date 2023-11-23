import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES,MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ route, navigation }) => {
 
  const catId = route.params?.categoryId;
  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);
const displayMeals=MEALS.filter(meal=>meal.categoryIds.indexOf(catId)>=0)
  // Use useLayoutEffect to set the header title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCat.title,
      headerStyle: {
        backgroundColor: 'yellow',
      },
    });
  }, [navigation,selectedCat]);
  

  return (
   <MealList listData={displayMeals} navigation={navigation} />
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
