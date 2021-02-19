import React from "react"
import "react-native-gesture-handler"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { Provider as PaperProvider } from "react-native-paper"

import Root from "./src/components/Root"

import theme from "./assets/__theme__/theme"

export default function App() {
  const createClient = () => {
    return new ApolloClient({
      uri: "https://api.graphql.jobs",
      cache: new InMemoryCache(),
    })
  }

  return (
    <ApolloProvider client={createClient()}>
      <PaperProvider theme={theme}>
        <Root />
      </PaperProvider>
    </ApolloProvider>
  )
}
