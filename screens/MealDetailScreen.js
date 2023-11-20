import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { MEALS } from "../data/dummy-data";
const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerStyle: {
        backgroundColor: 'yellow',
      },
      headerRight: () => (
        <Icon
          name="heart-outline"// Correct icon name for AntDesign "hearto" (outline heart)
          size={30}
          color="blue"
          style={{ marginRight: 15 }}
          onPress={() => {
            // Handle the action when the heart icon is pressed
            // For example, you can toggle the favorite status
            console.log("like");
          }}
        />
      ),
    });
  }, [navigation, selectedMeal]);

  return (
    <View style={Styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go to Back"
        onPress={() => {
          navigation.popToTop();
        }}
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

export default MealDetailScreen;
