import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = ({ route, navigation }) => {
  // Accessing the categoryId directly from the route.params object
  const catId = route.params?.categoryId;
  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={Styles.screen}>
      <Text>The Category Meal Screen </Text>
      <Text>{selectedCat.title}</Text>
      <Button
        title="Go to MealDetailScreen"
        onPress={() => navigation.navigate('MealDetailScreen')}
      />
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
