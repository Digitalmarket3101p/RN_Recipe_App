import React from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteMeal from './screens/FavoriteMeal';

import Icon from 'react-native-vector-icons/AntDesign';
import FilterScreen from './screens/FilterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MealsTabNavigator = () => {
  const isCategoryMealsFocused = useIsFocused();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: getHeaderTitle(route),
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Meals') {
            iconName = 'home'; // Change to the desired icon for "Meals"
          } else if (route.name === 'Favorite') {
            iconName = 'heart'; // Change to the desired icon for "Favorite"
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

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MealsTabNavigator} />
      <Drawer.Screen name="Filter" component={FilterScreen} options={{ headerTitle: 'FilterScreen' }}/>
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{
            headerShown: false, // Hide the header for the drawer navigator screen
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
