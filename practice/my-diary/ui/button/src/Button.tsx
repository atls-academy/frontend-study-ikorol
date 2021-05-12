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

export const Button = styled.button(
  system({
    boxSizing: true,
    cursor: true,
    transform: true,
    outline: true,
  }),
  typography,
  layout,
  space,
  color,
  flexbox,
  shadow,
  position,
  border,
)

Button.defaultProps = {
  color: '#6c757d',
  border: 'none',
  outline: 'none',
  '&:active': {
    transform: 'scale(0.98)',
  },
  fontSize: '17px',
  fontWeight: '400',
  textAlign: 'center',
  cursor: 'pointer',
}
