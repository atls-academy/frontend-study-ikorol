import React                                     from 'react'

import { List }                                  from '@ui/list'
import { useFilter }                             from '@store/filter'
import { useNotes }                              from '@store/notes'
import { useSearchValue }                        from '@store/search-value'

import { deleteItem, filterNotes, toggleStatus } from './actions'

export const PostList = () => {
  const [notes, setNotes] = useNotes()
  const [searchValue] = useSearchValue()
  const [filter] = useFilter()

  return (
    <List
      notes={notes}
      setNotes={setNotes}
      visibleNotes={filterNotes(notes, searchValue, filter)}
      deleteItem={deleteItem}
      toggleStatus={toggleStatus}
    />
  )
}
