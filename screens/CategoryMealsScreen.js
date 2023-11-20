import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = ({ route, navigation }) => {
  const catId = route.params?.categoryId;
  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

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
    <View style={Styles.screen}>
      <Text>The Category Meal Screen </Text>
      <Text>{selectedCat.title}</Text>
      <Button
        title="Go to MealDetail Screen"
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
