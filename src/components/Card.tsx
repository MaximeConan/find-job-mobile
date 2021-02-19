import React from "react"
import { Button, Card as _Card, Paragraph } from "react-native-paper"

import { IJob } from "../interfaces/jobInterfaces"

import styles from "./__styles__/Card.styles"

type Props = {
  data: IJob
  onJobPress: (slug: string, companySlug: string) => void
}

const Card = ({ data, onJobPress }: Props) => {
  const _onPress = () => {
    onJobPress(data.slug, data.company.slug)
  }

  return (
    <_Card style={styles.container}>
      <_Card.Title style={styles.title} title={data.title} />
      <_Card.Content>
        <Paragraph>{data.description.slice(0, 100) + "..."}</Paragraph>
      </_Card.Content>
      <_Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <_Card.Actions>
        <Button onPress={_onPress}>Détails</Button>
      </_Card.Actions>
    </_Card>
  )
}

export default Card
