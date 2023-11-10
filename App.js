import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="CategoriesScreen" component={CategoriesScreen}options={{
            title: 'Categories Screen',
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTitleStyle: {
              fontFamily: "sans-serif-condensed",
              fontSize: 20,
            },
          }} />
        <stack.Screen name="CategoryMealsScreen" component={CategoryMealsScreen} />
        <stack.Screen name="MealDetailScreen" component={MealDetailScreen} />

      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
