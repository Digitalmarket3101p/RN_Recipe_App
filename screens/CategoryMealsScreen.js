import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = ({ navigation }) => {
  return (
    <View style={Styles.screen}>
      <Text>The Category Meal Screen </Text>
      <Button
        title="Go to MealDetailScreen"
        onPress={() => navigation.navigate('MealDetailScreen')}
      />
      {/* <Button
        title="Go to Back"
        onPress={() => {
          navigation.pop();
        }}
      /> */}
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
