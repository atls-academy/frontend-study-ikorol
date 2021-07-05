import React              from 'react'
import { FC }             from 'react'

import { Item }           from './item.component'
import { Column, Layout } from './layout'
import { TodoListProps }  from './todo-list.interface'

export const TodoList: FC<TodoListProps> = ({
  notes,
  setNotes,
  visibleNotes,
  deleteItem,
  toggleStatus,
}) => {
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
