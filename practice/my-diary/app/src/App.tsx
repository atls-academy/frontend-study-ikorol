import React, { useState }     from 'react'
import { ThemeProvider }       from '@emotion/react'

import * as theme              from '@ui/theme'
import { Diary }               from '@fragments/diary'
import { FilterProvider }      from '@store/filter'
import { NotesProvider }       from '@store/notes'
import { SearchValueProvider } from '@store/search-value'
import { ShowDrawerProvider }  from '@store/show-drawer'

export const App = () => {
  const [notes, setNotes] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState('all')
  const [showDrawer, setShowDrawer] = useState<boolean>(null)

  return (
    <ThemeProvider theme={theme}>
      <NotesProvider value={[notes, setNotes]}>
        <SearchValueProvider value={[searchValue, setSearchValue]}>
          <FilterProvider value={[filter, setFilter]}>
            <ShowDrawerProvider value={[showDrawer, setShowDrawer]}>
              <Diary />
            </ShowDrawerProvider>
          </FilterProvider>
        </SearchValueProvider>
      </NotesProvider>
    </ThemeProvider>
  )
}
