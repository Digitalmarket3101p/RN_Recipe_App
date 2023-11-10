import React from "react";
import { View, Text, StyleSheet, Button, FlatList,TouchableOpacity } from "react-native";
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={Styles.gridItem}
        onPress={() => {
          navigation.navigate('CategoryMealsScreen', { categoryId: itemData.item.id });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
export default CategoriesScreen;
