import React from "react"
import { useQuery } from "@apollo/client"
import { ActivityIndicator, Text, View } from "react-native"

import { IFullJob } from "../interfaces/jobInterfaces"
import { JOB_BY_SLUG_QUERY } from "../queries/jobQueries"

type Props = {
  route: any
}

const JobDetailsScreen = ({ route }: Props) => {
  const { slug, companySlug } = route.params
  const { loading, data } = useQuery(JOB_BY_SLUG_QUERY, {
    variables: { slug, company: companySlug },
  })

  const job: IFullJob = data?.job

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <Text>Job Details Screen - {job.id}</Text>
    </View>
  )
}

export default JobDetailsScreen
