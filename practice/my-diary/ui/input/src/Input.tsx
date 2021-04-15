import styled                                       from '@emotion/styled'
import { border, color, layout, space, typography } from 'styled-system'

export const Input = styled.input(layout, typography, space, border, color)

Input.defaultProps = {
  display: 'block',
  color: '#495057',
  width: '100%',
  fontSize: 16,
  fontWeight: 400,
  background: '#fff',
  border: '1px solid #ced4da',
  borderRadius: 4,
}
