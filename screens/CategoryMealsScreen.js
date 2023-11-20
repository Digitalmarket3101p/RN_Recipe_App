import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES,MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
const CategoryMealsScreen = ({ route, navigation }) => {
  const renderMealItem=itemData=>{
    return (
      <MealItem title={itemData.item.title} duration={itemData.item.duration}
      complexity={itemData.item.complexity} affordability={itemData.item.affordability} 
      image={itemData.item.imgUrl}
       onSelectMeal={()=>{
        navigation.navigate('MealDetailScreen', { mealId: itemData.item.id });
       }} />
    )
  }
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
    <View style={Styles.screen}>
      <FlatList data={displayMeals} keyExtractor={(item,index)=>item.id} 
      renderItem={renderMealItem} style={{width:'100%'}}/>
    </View>
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
