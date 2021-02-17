import React from "react"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import HomeScreen from "./src/screens/HomeScreen"
import JobDetailsScreen from "./src/screens/JobDetailsScreen"
import ContactScreen from "./src/screens/ContactScreen"

export default function App() {
  const createClient = () => {
    return new ApolloClient({
      uri: "https://api.graphql.jobs",
      cache: new InMemoryCache(),
    })
  }

  const Stack = createStackNavigator()

  return (
    <ApolloProvider client={createClient()}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}
