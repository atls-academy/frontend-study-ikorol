import styled from '@emotion/styled'
import {
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system'

export const Box = styled.div(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
  }),
  border,
  shadow,
  color,
  flexbox,
  typography,
  layout,
  position,
  space,
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
  margin: '16px 0',
  fontFamily: ['Roboto', 'Ubuntu', 'sans-serif'],
}
