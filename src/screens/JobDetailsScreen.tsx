import React from "react"
import { Text, View } from "react-native"

type Props = {
  route: any
}

const JobDetailsScreen = ({ route }: Props) => {
  const { id } = route.params
  return (
    <View>
      <Text>Job Details Screen - {id}</Text>
    </View>
  )
}

export default JobDetailsScreen
