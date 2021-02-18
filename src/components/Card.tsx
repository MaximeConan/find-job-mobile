import React from "react"
import { Button, Card as _Card, Paragraph } from "react-native-paper"

import { IJob } from "../interfaces/jobInterfaces"

type Props = {
  data: IJob
  onJobPress: (id: string, slug: string, companySlug: string) => void
}

const Card = ({ data, onJobPress }: Props) => {
  const _onPress = () => {
    onJobPress(data.id, data.slug, data.company.slug)
  }

  return (
    <_Card>
      <_Card.Title title={data.title} />
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
