import React        from 'react'

import { Column }   from '@ui/layout'
import { useNotes } from '@store/notes'

import { Item }     from './Item'

export const List: any = ({ deleteItem, toggleStatus }) => {
  const [notes] = useNotes()

  return (
    <Column>
      {notes.map(item => (
        <Item note={item} key={item.id} deleteItem={deleteItem} toggleStatus={toggleStatus} />
      ))}
    </Column>
  )
}
