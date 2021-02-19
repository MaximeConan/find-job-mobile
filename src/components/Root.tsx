import React from "react"
import "react-native-gesture-handler"
import { Ionicons } from "@expo/vector-icons"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useTheme } from "react-native-paper"

import { RootTabParamList } from "../interfaces/routesInterfaces"

import HomeStackScreen from "../navigation/HomeStackScreen"
import ContactScreen from "../screens/ContactScreen"

export default function Root() {
  const theme = useTheme()

  const Tab = createBottomTabNavigator<RootTabParamList>()

  const resolveTabIcons = (isFocused: boolean, name: string): string => {
    switch (name) {
      case "Home":
        return isFocused
          ? "md-information-circle"
          : "md-information-circle-outline"

      case "Contact":
        return isFocused ? "md-list-box" : "md-list"

      default:
        return isFocused ? "md-checkmark-circle-outline" : "md-checkmark-circle"
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
    style: {
      height: 60,
      paddingTop: 8,
      paddingBottom: 8,
    },
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
