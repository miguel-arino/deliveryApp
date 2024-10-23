import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import RestaurantsScreen from '../screens/RestaurantsScreen'
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen'

const Stack = createStackNavigator()

const AppNavigator = () => {
  const navigatorSettings: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: true,
    gestureDirection: 'vertical',
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Restaurants'
        screenOptions={navigatorSettings}>
        <Stack.Screen name='Restaurants' component={RestaurantsScreen} />
        <Stack.Screen
          name='RestaurantDetail'
          component={RestaurantDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
