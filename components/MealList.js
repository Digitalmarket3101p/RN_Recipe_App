import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import MealItem from './MealItem'

export default function MealList(props) {
    const renderMealItem=itemData=>{
        return (
          <MealItem title={itemData.item.title} duration={itemData.item.duration}
          complexity={itemData.item.complexity} affordability={itemData.item.affordability} 
          image={itemData.item.imgUrl}
           onSelectMeal={()=>{
            props.navigation.navigate('MealDetailScreen', { mealId: itemData.item.id });
           }} />
        )
      }
  return (
    <View style={Styles.screen}>
      <FlatList data={props.listData} keyExtractor={(item,index)=>item.id} 
      renderItem={renderMealItem} style={{width:'100%'}}/>
    </View>
  )
}

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
})