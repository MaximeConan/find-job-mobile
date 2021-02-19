import React from "react"
import "react-native-gesture-handler"
import { Ionicons } from "@expo/vector-icons"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useTheme } from "react-native-paper"

import HomeStackScreen from "../navigation/HomeStackScreen"
import ContactScreen from "../screens/ContactScreen"

export default function Root() {
  const theme = useTheme()

  const Tab = createBottomTabNavigator()

  const resolveTabIcons = (isFocused: boolean, name: string) => {
    switch (name) {
      case "Home":
        return isFocused
          ? "ios-information-circle"
          : "ios-information-circle-outline"

      case "Home":
        return isFocused ? "ios-list-box" : "ios-list"

      default:
        return isFocused
          ? "ios-checkmark-circle-outline"
          : "ios-checkmark-circle"
    }
  }

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({
      focused,
      color,
      size,
    }: {
      focused: string
      color: string
      size: number
    }) => {
      const iconName = resolveTabIcons(focused === route.name, route.name)

      return <Ionicons name={iconName} size={size} color={color} />
    },
  })

  const tabBarOptions = {
    activeTintColor: theme.colors.primary,
    inactiveTintColor: theme.colors.accent,
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
