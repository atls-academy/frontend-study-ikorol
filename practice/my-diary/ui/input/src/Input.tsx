import styled                        from '@emotion/styled'
import { border, color, typography } from 'styled-system'

export const Input = styled.input(
  () => ({
    display: 'block',
    width: '100%',
    padding: '0 6px',
    color: '#495057',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: 16,
    fontWeight: 400,
  }),
  typography,
  border,
  color,
)
