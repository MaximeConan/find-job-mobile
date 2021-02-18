import React, { ReactElement } from "react"
import { View } from "react-native"

import styles from "./__styles__/Layout.styles"

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>
}

export default Layout
