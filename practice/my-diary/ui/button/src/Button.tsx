import styled from '@emotion/styled'
import {
  border,
  boxShadow,
  color,
  flexbox,
  layout,
  position,
  space,
  system,
  typography,
} from 'styled-system'

export const Button = styled.button(
  system({
    boxSizing: true,
    cursor: true,
    transition: true,
  }),
  typography,
  layout,
  space,
  color,
  flexbox,
  boxShadow,
  position,
  border,
)

Button.defaultProps = {
  color: '#6c757d',
  border: '1px solid #6c757d',
  borderColor: '#6c757d',
  height: '38px',
  fontSize: '17px',
  fontWeight: '400',
  textAlign: 'center',
  padding: '6px 12px',
  borderRadius: '4px',
  cursor: 'pointer',
}
