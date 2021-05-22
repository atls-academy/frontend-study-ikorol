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
    fontWeight: 'bold',
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
  color: 'white',
  backgroundColor: 'deepPurple',
  fontSize: 32,
  borderRadius: 35,
  textAlign: 'center',
  border: 'none',
}
