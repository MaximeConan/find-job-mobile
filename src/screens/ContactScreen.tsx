import React from "react"
import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { Text } from "react-native"

import { RootTabParamList } from "../interfaces/routesInterfaces"

import Layout from "../components/Layout"

type RootTabComponent<RouteName extends keyof RootTabParamList> = React.FC<{
  navigation: StackNavigationProp<RootTabParamList, RouteName>
  route: RouteProp<RootTabParamList, RouteName>
}>

const ContactScreen: RootTabComponent<"Contact"> = () => {
  return (
    <Layout>
      <Text>Contact Screen</Text>
    </Layout>
  )
}

export default ContactScreen
