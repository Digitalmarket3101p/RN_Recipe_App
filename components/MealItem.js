import React from "react";
import { View,Text,StyleSheet,TouchableOpacity ,ImageBackground} from "react-native";

const MealItem=props=>{
return(
    <View style={Styles.mealItem}>

    <TouchableOpacity onPress={props.onSelectMeal}>

  <View style={{margin:8,borderRadius:12,
    overflow:'hidden'}}> 
    <View style={{...Styles.mealRow,...Styles.mealHeader}}  >
        <ImageBackground source={{uri:props.image}} style={Styles.bgimg} >
            <View style={Styles.titleContainer}>

    <Text style={Styles.title} numberOfLines={1}>{props.title}</Text>
            </View>
    </ImageBackground>
    </View>
    <View style={{...Styles.mealRow,...Styles.mealDetail}}>
        <Text>{props.duration}m</Text>
        <Text>{props.complexity.toUpperCase()}</Text>
        <Text>{props.affordability.toUpperCase()}</Text>

    </View>
    </View>
    </TouchableOpacity>
    </View>
)

}

const Styles=StyleSheet.create({
mealRow:{
    flexDirection:'row',
    // padding:10
},
mealItem:{
    height:200,
    width:'100%',
    backgroundColor:'#f5f5f5',
   
},
mealHeader:{
    height:'85%',

},
bgimg:{
height:'100%',
width:'100%',
justifyContent:'flex-end'
},
mealDetail:{
paddingHorizontal:10,
justifyContent:'space-between',
alignItems:'center',
height:'15%'
},
titleContainer:{
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingVertical:5,
    paddingHorizontal:12,
},
title:{
    fontSize:20,
    color:'white',
   
    textAlign:'center'
}

})
export default MealItem