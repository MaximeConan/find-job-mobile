import React from "react"
import { ActivityIndicator, FlatList, View } from "react-native"
import { useQuery } from "@apollo/client"
import { JOBS_QUERY } from "../queries/jobQueries"
import { IJob } from "../interfaces/jobInterfaces"
import { Divider } from "react-native-paper"
import { StackNavigationProp } from "@react-navigation/stack"

import { HomeStackParamList } from "../interfaces/routesInterfaces"
import { RouteProp } from "@react-navigation/core"

import Card from "../components/Card"
import Layout from "../components/Layout"

type RootStackComponent<RouteName extends keyof HomeStackParamList> = React.FC<{
  navigation: StackNavigationProp<HomeStackParamList, RouteName>
  route: RouteProp<HomeStackParamList, RouteName>
}>

const HomeScreen: RootStackComponent<"Home"> = ({ navigation }) => {
  const { loading, data } = useQuery(JOBS_QUERY)
  const jobs: IJob[] = data?.jobs

  const onJobPress = (slug: string, companySlug: string) => {
    navigation.navigate("JobDetails", { slug, companySlug })
  }

  const _renderItem = ({ item }: { item: IJob }) => {
    return <Card data={item} onJobPress={onJobPress} />
  }

  return (
    <Layout>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={jobs}
          renderItem={_renderItem}
          ItemSeparatorComponent={() => <Divider />}
        />
      )}
    </Layout>
  )
}

export default HomeScreen
