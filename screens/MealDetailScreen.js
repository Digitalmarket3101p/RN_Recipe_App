import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = ({ navigation }) => {
  return (
    <View style={Styles.screen}>
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
