import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item as HeaderItem } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailsScreen = ({ route, navigation }) => {
  const meal = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: meal.title,
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <HeaderItem 
              title="Favourite" 
              iconName="ios-star" 
              onPress={() => {
              }} 
            />
          </HeaderButtons>
        );
      },
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
      <Button
        title="Back to Categories"
        onPress={() => navigation.navigate('Categories')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailsScreen;
