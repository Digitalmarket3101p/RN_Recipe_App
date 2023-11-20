import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteMeal from './screens/FavoriteMeal';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MealsTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: getHeaderTitle(route), // Set header title based on the tab route
        headerStyle: {
          backgroundColor: 'yellow',
        },
        headerTitleStyle: {
          fontFamily: 'sans-serif-condensed',
          fontSize: 20,
        },
      })}
    >
      {/* Add your tab screens here */}
      <Tab.Screen name="Meals" component={CategoriesScreen} />
      <Tab.Screen name="Favorite" component={FavoriteMeal} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MealsTabNavigator"
          component={MealsTabNavigator}
          options={{
            headerShown: false, // Hide the header for the tab navigator screen
          }}
        />
        <Stack.Screen name="CategoryMealsScreen" component={CategoryMealsScreen} />
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const getHeaderTitle = (route) => {
  // Return different header titles based on the tab route
  switch (route.name) {
    case 'Meals':
      return 'Meal Category';
    case 'Favorite':
      return 'Favorite Meals';
    default:
      return 'Meal Category';
  }
};

export default App;
