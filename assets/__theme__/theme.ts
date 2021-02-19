import { DefaultTheme } from "react-native-paper"

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      white: string
    }

    interface Theme {
      spaces: {
        xSmall: number
        small: number
        medium: number
        large: number
        xLarge: number
      }
    }
  }
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FF3352",
    accent: "#023F50",
    white: "#FFFFFF",
  },
  spaces: {
    xSmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    xLarge: 32,
  },
  fonts: {
    ...DefaultTheme.fonts,
    medium: {
      ...DefaultTheme.fonts.medium,
      color: "#023F50",
    },
    regular: {
      ...DefaultTheme.fonts.regular,
      color: "#737373",
    },
  },
}

export default theme
