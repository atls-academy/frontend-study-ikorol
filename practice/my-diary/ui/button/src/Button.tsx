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
    transform: true,
  }),
  () => ({
    outline: 'none',
    cursor: 'pointer',
    '&:active': {
      transform: 'scale(0.98)',
    },
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
  color: 'gray',
  borderColor: 'purple',
  fontSize: '17px',
  fontWeight: '400',
  textAlign: 'center',
}
