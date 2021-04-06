import React                                                         from 'react'
import styled                                                        from '@emotion/styled'
import { border, color, flexbox, layout, space, system, typography } from 'styled-system'

const Item = styled.li(
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

export const List: any = ({ notes, children }) => {
  const elements = notes.map(item => {
    return <Item key={item.id}>{children}</Item>
  })
  return elements
}
