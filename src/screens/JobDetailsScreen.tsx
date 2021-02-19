import React from "react"
import { useQuery } from "@apollo/client"
import { ActivityIndicator, View } from "react-native"
import { Chip, Paragraph, Title } from "react-native-paper"
import { ScrollView } from "react-native-gesture-handler"
import { RouteProp } from "@react-navigation/native"

import { RootStackParamList } from "../interfaces/routesInterfaces"

import { IFullJob, ITag } from "../interfaces/jobInterfaces"
import { JOB_BY_SLUG_QUERY } from "../queries/jobQueries"

import styles from "./__styles__/JobDetailsScreen.styles"
import Layout from "../components/Layout"
import { StackNavigationProp } from "@react-navigation/stack"

type RootStackComponent<RouteName extends keyof RootStackParamList> = React.FC<{
  navigation: StackNavigationProp<RootStackParamList, RouteName>
  route: RouteProp<RootStackParamList, RouteName>
}>

const JobDetailsScreen: RootStackComponent<"JobDetails"> = ({ route }) => {
  const { slug, companySlug } = route.params
  const { loading, data } = useQuery(JOB_BY_SLUG_QUERY, {
    variables: { slug, company: companySlug },
  })

  const job: IFullJob = data?.job

  return (
    <Layout>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Title style={styles.title}>{job.title}</Title>
          <View style={styles.tagsContainer}>
            {job.tags.map((tag: ITag) => {
              return (
                <Chip style={styles.tag} key={tag.id}>
                  {tag.name}
                </Chip>
              )
            })}
          </View>
          <Paragraph>{job.description}</Paragraph>
        </ScrollView>
      )}
    </Layout>
  )
}

export default JobDetailsScreen
