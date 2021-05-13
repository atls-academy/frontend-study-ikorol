import styled                        from '@emotion/styled'
import { border, color, typography } from 'styled-system'

export const Input = styled.input(
  () => ({
    display: 'block',
    height: '40px',
    backgroundColor: '#fff',
    padding: '0 20px',
    border: '1px solid #e4eaff',
    fontSize: 16,
    fontWeight: 400,
    outline: 'none',
  }),
  typography,
  border,
  color,
)
