import React from "react"
import { ActivityIndicator, FlatList, Text, View } from "react-native"
import { useQuery } from "@apollo/client"
import { JOBS_QUERY } from "../queries/jobQueries"
import { IJob } from "../interfaces/jobInterfaces"
import { TouchableOpacity } from "react-native-gesture-handler"

type Props = {
  navigation: any
}

const HomeScreen = ({ navigation }: Props) => {
  const { loading, error, data } = useQuery(JOBS_QUERY)
  const jobs: IJob[] = data?.jobs

  const onJobPress = (id: string) => () => {
    navigation.navigate("JobDetails", { id })
  }

  const _renderItem = ({ item }: { item: IJob }) => {
    return (
      <TouchableOpacity onPress={onJobPress(item.id)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Text>Hello world !</Text>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={jobs} renderItem={_renderItem} />
      )}
    </View>
  )
}

export default HomeScreen
