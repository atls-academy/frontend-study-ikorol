import React              from 'react'

import { Column, Layout } from '../layout'
import { Item }           from './Item'

export const TodoList: any = ({ notes, setNotes, visibleNotes, deleteItem, toggleStatus }) => {
  return (
    <Column backgroundColor='white'>
      <Layout flexBasis={50} />
      {visibleNotes.map(item => (
        <Item
          notes={notes}
          setNotes={setNotes}
          note={item}
          key={item.id}
          deleteItem={deleteItem}
          toggleStatus={toggleStatus}
        />
      ))}
    </Column>
  )
}
