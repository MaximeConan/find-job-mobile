import React from "react"
import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { Text } from "react-native"

import { RootStackParamList } from "../interfaces/routesInterfaces"

import Layout from "../components/Layout"

type RootStackComponent<RouteName extends keyof RootStackParamList> = React.FC<{
  navigation: StackNavigationProp<RootStackParamList, RouteName>
  route: RouteProp<RootStackParamList, RouteName>
}>

const ContactScreen: RootStackComponent<"Contact"> = () => {
  return (
    <Layout>
      <Text>Contact Screen</Text>
    </Layout>
  )
}

export default ContactScreen
