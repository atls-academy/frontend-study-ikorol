import styled    from '@emotion/styled'
import { color } from 'styled-system'

export const Background = styled.div(
  () => ({
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  }),
  color,
)
