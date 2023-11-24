import { MEALS } from "../../data/dummy-data";

const initialState={
    meals:MEALS,
    filterMeals:MEALS,
    favoriteMeals:[]
}

const mealReducer=(state=initialState,action)=>{

    return state;
}

export default mealReducer