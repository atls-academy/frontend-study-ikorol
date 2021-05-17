import React              from 'react'

import { Column, Layout } from '@ui/layout'

import { Item }           from './Item'

export const List: any = ({ notes, setNotes, visibleNotes, deleteItem, toggleStatus }) => {
  return (
    <Column zIndex={0} backgroundColor='white' minHeight='250px'>
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
      <Layout flexBasis={20} />
    </Column>
  )
}
