import React, { useState, useLayoutEffect, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const FilterSwitch = (props) => {
  return (
    <View style={Styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ false: 'gray', true: 'red' }}
        thumbColor='gray'
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilter = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian,
    };
    console.log(appliedFilter);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="save"
          size={30}
          color="blue"
          style={{ marginRight: 15 }}
          onPress={() => saveFilters()}
        />
      ),
    });
  }, [navigation, saveFilters]);

  return (
    <View style={Styles.screen}>
      <Text style={Styles.title}>The FilterScreen screen</Text>
      <FilterSwitch
        label='Gluten-free'
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-free'
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});

export default FilterScreen;
