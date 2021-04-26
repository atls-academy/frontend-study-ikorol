import React      from 'react'

import { Column } from '@ui/layout'

import { Item }   from './Item'

export const List: any = ({ visibleNotes, deleteItem, toggleStatus }) => {
  return (
    <Column>
      {visibleNotes.map(item => (
        <Item note={item} key={item.id} deleteItem={deleteItem} toggleStatus={toggleStatus} />
      ))}
    </Column>
  )
}
