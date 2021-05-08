import React, { useState }     from 'react'
import { ThemeProvider }       from '@emotion/react'

import * as theme              from '@ui/theme'
import { FormAddPost }         from '@components/form-add-post'
import { MainPageHeader }      from '@components/main-page-header'
import { PostList }            from '@components/post-list'
import { FilterProvider }      from '@store/filter'
import { NotesProvider }       from '@store/notes'
import { SearchValueProvider } from '@store/search-value'
import { Box, Column, Layout } from '@ui/layout'

export const App = () => {
  const uniqueKey = () => Math.random() * Date.now()
  const [notes, setNotes] = useState([
    {
      note: 'Flight to Moscow',
      important: false,
      liked: false,
      id: uniqueKey(),
      onHover: false,
      done: false,
    },
    {
      note: 'Friends meeting',
      important: false,
      liked: false,
      id: uniqueKey(),
      onHover: false,
      done: false,
    },
    {
      note: 'Buy a new frying pan in Ikea',
      important: false,
      liked: false,
      id: uniqueKey(),
      onHover: false,
      done: false,
    },
  ])

  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState('all')
  return (
    <ThemeProvider theme={theme}>
      <NotesProvider value={[notes, setNotes]}>
        <SearchValueProvider value={[searchValue, setSearchValue]}>
          <FilterProvider value={[filter, setFilter]}>
            <Box margin='auto' justifyContent='center' backgroundColor='purple'>
              <Column width='600px'>
                <Layout flexBasis={100} />
                <MainPageHeader />
                <Layout flexBasis={30} />
                <PostList />
                <FormAddPost />
                <Layout flexBasis={50} />
              </Column>
            </Box>
          </FilterProvider>
        </SearchValueProvider>
      </NotesProvider>
    </ThemeProvider>
  )
}
