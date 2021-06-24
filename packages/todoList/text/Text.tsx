import styled                               from '@emotion/styled'
import { color, space, system, typography } from 'styled-system'

export const Text = styled.span(
  system({
    wordBreak: true,
    whiteSpace: true,
    textTransform: true,
    textOverflow: true,
    cursor: true,
    textDecoration: true,
  }),
  ({ textDecorationColor, theme }) => ({
    textDecorationColor: theme.colors[textDecorationColor] || textDecorationColor,
  }),
  color,
  space,
  typography,
)

Text.defaultProps = {
  fontWeight: 'normal',
  fontSize: 'medium',
  padding: '0 10px',
  fontFamily: 'standard',
  textDecorationColor: 'purple',
}
