import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FilterScreen = (props) => {
  return (
    <View style={Styles.screen}>
      <Text>The FilterScreen screen</Text>
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
export default FilterScreen;
