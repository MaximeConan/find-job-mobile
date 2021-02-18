import React from "react"
import { ActivityIndicator, FlatList, View } from "react-native"
import { useQuery } from "@apollo/client"
import { JOBS_QUERY } from "../queries/jobQueries"
import { IJob } from "../interfaces/jobInterfaces"
import { Divider } from "react-native-paper"
import Card from "../components/Card"

type Props = {
  navigation: any
}

const HomeScreen = ({ navigation }: Props) => {
  const { loading, data } = useQuery(JOBS_QUERY)
  const jobs: IJob[] = data?.jobs

  const onJobPress = (id: string, slug: string, companySlug: string) => {
    navigation.navigate("JobDetails", { id, slug, companySlug })
  }

  const _renderItem = ({ item }: { item: IJob }) => {
    return <Card data={item} onJobPress={onJobPress} />
  }

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={jobs}
          renderItem={_renderItem}
          ItemSeparatorComponent={() => <Divider />}
        />
      )}
    </View>
  )
}

export default HomeScreen
