import React from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteMeal from './screens/FavoriteMeal';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MealsTabNavigator = () => {
  const isCategoryMealsFocused = useIsFocused();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: getHeaderTitle(route),
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Meals') {
            iconName = 'appstore-o'; // Change to the desired icon for "Meals"
          } else if (route.name === 'Favorite') {
            iconName = 'hearto'; // Change to the desired icon for "Favorite"
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: 'yellow',
        },
        headerTitleStyle: {
          fontFamily: 'sans-serif-condensed',
          fontSize: 20,
        },
      })}
    >
      <Tab.Screen name="Meals" component={CategoriesScreen} />
      {isCategoryMealsFocused && <Tab.Screen name="Favorite" component={FavoriteMeal} />}
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
