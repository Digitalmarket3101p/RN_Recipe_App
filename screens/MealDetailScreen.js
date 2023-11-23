import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { MEALS } from "../data/dummy-data";
const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const [isLiked, setIsLiked] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerStyle: {
        backgroundColor: 'yellow',
      },
      headerRight: () => (
        <Icon
          name={isLiked ? "star-sharp" : "star-outline"} // Use "star" for a filled star and "staro" for an outlined star
          size={30}
          color={isLiked ? "red" : "blue"} // Change color based on the like status
          style={{ marginRight: 15 }}
          onPress={() => {
            setIsLiked(!isLiked); // Toggle the like status
            console.log("like");
          }}
        />
      ),
    });
  }, [navigation, selectedMeal,isLiked]);

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
