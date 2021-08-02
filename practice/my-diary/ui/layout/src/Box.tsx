import styled                                               from '@emotion/styled'
import { border, color, flexbox, layout, position, system } from 'styled-system'

export const Box = styled.div(
  system({
    boxSizing: true,
    cursor: true,
  }),
  border,
  color,
  flexbox,
  layout,
  position
)
Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
}
