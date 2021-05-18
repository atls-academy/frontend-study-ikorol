import styled                     from '@emotion/styled'
import { color, flexbox, layout } from 'styled-system'

export const Background = styled.div(
  () => ({
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    position: 'fixed',
    display: 'flex',
  }),
  color,
  layout,
  flexbox,
)

Background.defaultProps = {
  justifyContent: 'center',
  backgroundColor: 'purple',
}
