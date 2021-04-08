import styled                                                        from '@emotion/styled'
import { border, color, flexbox, layout, space, system, typography } from 'styled-system'

export const Item = styled.li(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
  }),
  typography,
  flexbox,
  layout,
  color,
  space,
  border,
)

Item.defaultProps = {
  fontSize: '20px',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  display: 'flex',
  backgroundColor: '#fff',
  borderRadius: '4px',
  marginBottom: '5px',
  paddingLeft: '10px',
}
