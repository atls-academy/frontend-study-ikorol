import styled from '@emotion/styled'
import {
  alignItems,
  border,
  boxShadow,
  color,
  flexbox,
  justifyContent,
  layout,
  position,
  space,
  system,
} from 'styled-system'

export const Box = styled.div(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
  }),
  layout,
  space,
  color,
  flexbox,
  boxShadow,
  position,
  border,
  justifyContent,
  alignItems,
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
  margin: '1rem 0',
}
