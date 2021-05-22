import styled                           from '@emotion/styled'
import { border, color, shadow, space } from 'styled-system'
import { switchProp }                   from 'styled-tools'

export const Button = styled.button(
  () => ({
    outline: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    '&:active': {
      transform: 'scale(0.98)',
    },
  }),
  switchProp('size', () => ({
    large: {
      backgroundColor: '#b07fec',
      height: '80px',
      borderRadius: 35,
      border: 'none',
      color: 'white',
    },
    small: {
      backgroundColor: 'deepPurple',
      borderRadius: 35,
      border: '1px solid #e4eaff',
      color: 'white',
    },
    mini: {
      backgroundColor: 'white',
      border: 'none',
    },
  })),
  border,
  color,
  space,
  shadow,
)
