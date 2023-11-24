import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealsScreen = ({ route, navigation }) => {

  const catId = route.params?.categoryId;
  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);
  const availableMeals=useSelector(state=>state.meals.filterMeals)
  const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  // Use useLayoutEffect to set the header title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCat.title,
      headerStyle: {
        backgroundColor: 'yellow',
      },
    });
  }, [navigation, selectedCat]);


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
