import styled                                  from '@emotion/styled'
import { flexbox, layout, system, typography } from 'styled-system'

export const Item = styled.li(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
  }),
  typography,
  flexbox,
  layout,
)

Item.defaultProps = {
  fontSize: '20px',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  display: 'flex',
}
