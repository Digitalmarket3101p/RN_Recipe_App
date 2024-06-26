import React from "react";
import { View, Text, StyleSheet, Button, FlatList,TouchableOpacity } from "react-native";
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from "../components/CategoryGridTile";
const CategoriesScreen = ({navigation}) => {
  const renderGridItem = (itemData) => {
    return(
      <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={()=>{
        navigation.navigate('CategoryMealsScreen', { categoryId: itemData.item.id });

      }} />
    )
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
 
  Text:{
    fontSize:20
  }
});
export default CategoriesScreen;
