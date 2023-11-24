import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV } from "../actions/meals";

const initialState={
    meals:MEALS,
    filterMeals:MEALS,
    favoriteMeals:[]
}

const mealReducer=(state=initialState,action)=>{
switch(action.type){
    case TOGGLE_FAV:
        const existingIndex= state.favoriteMeals.findIndex(meal=>meal.id===action.mealId)
        if(existingIndex>=0){
            const updatedFav=[...state.favoriteMeals]
            updatedFav.splice(existingIndex,1);
                return {...state,favoriteMeals:updatedFav}
        }else{
            const meal=state.meals.find(meal=>meal.id===action.mealId)
                 return {...state,favoriteMeals:state.favoriteMeals.concat(meal)}
        }
        default:
            state;
}
    return state;
}

export default mealReducer