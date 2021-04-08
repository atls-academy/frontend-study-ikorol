import React    from 'react'

import { Item } from './Item'

export const List: any = ({ notes, children }) => {
  const elements = notes.map(item => {
    return <Item key={item.id}>{children}</Item>
  })
  return elements
}
