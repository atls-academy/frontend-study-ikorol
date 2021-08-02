import styled                     from '@emotion/styled'
import { color, flexbox, layout } from 'styled-system'

export const Background = styled.div(
  () => ({
    display: 'flex',
    height: '100%',
  }),
  color,
  layout,
  flexbox
)
