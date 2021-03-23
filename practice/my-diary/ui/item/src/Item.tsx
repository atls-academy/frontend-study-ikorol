import styled                                        from '@emotion/styled'
import { display, fontSize, justifyContent, system } from 'styled-system'

export const Item = styled.li(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
  }),
  fontSize,
  justifyContent,
  display,
)

Item.defaultProps = {
  fontSize: '1.25rem',
  boxSizing: 'border-box',
  justifyContent: 'space-between !important',
  display: 'flex !important',
}
