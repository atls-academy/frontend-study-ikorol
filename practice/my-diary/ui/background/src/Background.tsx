import styled                                          from '@emotion/styled'
import { background, border, color, layout, position } from 'styled-system'

export const Background = styled.div(
  () => ({
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  }),
  border,
  background,
  layout,
  position,
  color,
)
