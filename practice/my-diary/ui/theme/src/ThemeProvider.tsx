import React                                     from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import * as theme                                from './theme'

export const ThemeProvider = (props) => <EmotionThemeProvider theme={theme} {...props} />
