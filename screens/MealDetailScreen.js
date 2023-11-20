import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,// Set the header title based on the selected meal
       headerStyle: {
        backgroundColor: 'yellow',
      },
      headerRight: () => (
        // <HeaderButtons HeaderButtonComponent={HeaderButton} >
        //   <Item title="Favorite" iconName="ios-star" onPress={()=>{console.log('fav')}} />
        // </HeaderButtons>
        <Button
          onPress={() => {
            // Handle the action for the header right button
          }}
          title="Header Right"
          color="blue"
        />
      ),
    });
  }, [navigation, selectedMeal]);

  return (
    <View style={Styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Text>The MealDetail Screen</Text>
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
