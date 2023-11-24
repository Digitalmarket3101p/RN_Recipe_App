import React, { useEffect, useLayoutEffect,useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image,  } from "react-native";
import { useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";

import { useSelector,useDispatch } from "react-redux";
import { toggleFav } from "../store/actions/meals";


const ListItem=props=>{
  return <View style={Styles.ListItem}>
    <Text>{props.children}</Text>
  </View>
}
const MealDetailScreen = ({ route, navigation }) => {
  const availableMeals=useSelector(state=>state.meals.meals)
  const mealId = route.params?.mealId;
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const dispatch=useDispatch()
  const toggleFavHandeler=useCallback(()=>{
    dispatch(toggleFav(mealId))

  },[dispatch,mealId])
  const [isLiked, setIsLiked] = useState(false);
  
//   useEffect(()=>{
// navigation.setParams({toggleFavo:toggleFavHandeler})
//   },[toggleFavHandeler])

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
            toggleFavHandeler()
            
          }}
        />
      ),
    });
  }, [navigation, selectedMeal, isLiked]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imgUrl }} style={Styles.image} />
      <View style={Styles.mealDetail}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>

      </View>
      <Text style={Styles.title}>Ingrediants</Text>
      {selectedMeal.ingredients.map(item=>(<ListItem key={item}>{item}</ListItem>))}
      <Text style={Styles.title}>Steps</Text>
      {selectedMeal.steps.map(item=>(<ListItem key={item}>{item}</ListItem>))}

    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: '100%',
    height: 200
  },
  mealDetail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title:{
    fontFamily:'arial',
    fontSize:22,
    textAlign:'center'  
  },
  ListItem:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor:'pink',
    borderWidth:1,
    padding:10
  }

});

export default MealDetailScreen;
