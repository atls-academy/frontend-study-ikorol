import styled                               from '@emotion/styled'
import { color, space, system, typography } from 'styled-system'
import { switchProp }                       from 'styled-tools'

interface TextProps {
  fontWeight?: string | number
  fontSize?: string | number
  lineHeight?: string | number
  padding?: string | number
  fontFamily?: string
  textDecoration?: string
  decorationColor?: string
}
const decorationColor = switchProp('decorationColor', ({ theme }) => ({
  purple: {
    textDecorationColor: theme.colors.purple,
  },
}))

export const Text = styled.span<TextProps>(
  system({
    wordBreak: true,
    whiteSpace: true,
    textTransform: true,
    textOverflow: true,
    cursor: true,
    textDecoration: true,
  }),
  color,
  space,
  typography,
  decorationColor,
)

Text.defaultProps = {
  fontWeight: 'normal',
  fontSize: 'medium',
  padding: '0 10px',
  fontFamily: 'standart',
  decorationColor: 'purple',
}
