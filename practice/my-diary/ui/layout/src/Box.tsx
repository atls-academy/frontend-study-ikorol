import styled                                                              from '@emotion/styled'
import { border, color, flexbox, layout, position, shadow, space, system } from 'styled-system'

export const Box = styled.div(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
    visibility: true,
    cursor: true,
  }),
  border,
  shadow,
  color,
  flexbox,
  layout,
  position,
  space,
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
  fontFamily: ['Roboto', 'Ubuntu', 'sans-serif'],
  fontSize: 'small',
  fontWeight: 'bold',
  alignItems: 'center',
  border: '1px solid',
  borderColor: 'purple',
}
