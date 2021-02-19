import React from "react"
import "react-native-gesture-handler"
import { createStackNavigator } from "@react-navigation/stack"
import { useTheme } from "react-native-paper"

import HomeScreen from "../screens/HomeScreen"
import JobDetailsScreen from "../screens/JobDetailsScreen"

import { HomeStackParamList } from "../interfaces/routesInterfaces"

export default function Root() {
  const theme = useTheme()

  const Stack = createStackNavigator<HomeStackParamList>()

  const customHeader = {
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTintColor: theme.colors.white,
  }

  return (
    <Stack.Navigator screenOptions={customHeader}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
    </Stack.Navigator>
  )
}
