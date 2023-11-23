import React from "react";
import { TouchableOpacity,View,Text,StyleSheet,Platform,TouchableNativeFeedback } from "react-native";

const CategoryGridTile=props=>{
    let TouchableCmp=TouchableOpacity
    if(Platform.OS==='ios'){
        TouchableCmp=TouchableNativeFeedback
    }
return(
    <View style={Styles.gridItem}>
        
    <TouchableCmp
        
        onPress={props.onSelect }
        >
        <View style={{...Styles.container,...{backgroundColor:props.color}}}>
          <Text style={Styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableCmp>
          </View>
);
};

const Styles=StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 120,
        borderRadius:10,
        overflow:'hidden'
      },
      container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        elevation:3,
        padding:10,
        justifyContent:"flex-end",
        alignItems:"flex-end"
      },
      title:{
        fontFamily:'bold',
        fontSize:20
      }
})

export default CategoryGridTile