import styled                        from '@emotion/styled'
import { border, color, typography } from 'styled-system'

export const Input = styled.input(
  () => ({
    display: 'block',
    height: '40px',
    border: '1px solid',
    padding: '0 20px',
    fontSize: 16,
    fontWeight: 400,
    outline: 'none',
  }),
  typography,
  border,
  color,
)

Input.defaultProps = {
  borderColor: 'purple',
  backgroundColor: 'white',
}
