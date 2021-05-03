import React, { useState }                                from 'react'
import { ThemeProvider }                                  from '@emotion/react'
import { useIntl }                                        from 'react-intl'

import { MainPageHeader }                                 from '@components/main-page-header'
import { NotesProvider }                                  from '@store/notes'
import { Button }                                         from '@ui/button'
import { Input }                                          from '@ui/input'
import { Box, Column, Layout, Row }                       from '@ui/layout'
import { List }                                           from '@ui/list'
import { theme }                                          from '@ui/theme'

import messages                                           from './messages'
import { addItem, deleteItem, filterNotes, toggleStatus } from './actions'

export const App = () => {
  const intl = useIntl()
  const uniqueKey = () => Math.random() * Date.now()
  const [notes, setNotes] = useState([
    { note: 'Flight to Moscow', important: false, liked: false, id: uniqueKey() },
    { note: 'Friends meeting', important: true, liked: false, id: uniqueKey() },
    { note: 'Buy a new frying pan in Ikea', important: false, liked: false, id: uniqueKey() },
  ])
  const [newNote, setNewNote] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState('all')

  return (
    <ThemeProvider theme={theme}>
      <NotesProvider value={[notes, setNotes]}>
        <Box className='root' width='800px'>
          <Column>
            <MainPageHeader />
            <Layout flexBasis={20} />
            <Row justifyContent='space-between'>
              <Input
                placeholder={intl.formatMessage(messages.search)}
                onChange={event => setSearchValue(event.target.value)}
              />
              <Layout flexBasis={4} />
              <Button
                backgroundColor={filter === 'all' ? theme.colors.blue : 'transparent'}
                color={filter === 'all' ? theme.colors.white : theme.colors.grey}
                borderRadius={theme.radii.leftSide}
                onClick={() => setFilter('all')}
              >
                {intl.formatMessage(messages.all)}
              </Button>
              <Button
                backgroundColor={filter === 'important' ? theme.colors.blue : 'transparent'}
                color={filter === 'important' ? theme.colors.white : theme.colors.grey}
                borderRadius='none'
                onClick={() => setFilter('important')}
              >
                {intl.formatMessage(messages.important)}
              </Button>
              <Button
                backgroundColor={filter === 'liked' ? theme.colors.blue : 'transparent'}
                color={filter === 'liked' ? theme.colors.white : theme.colors.grey}
                borderRadius={theme.radii.rightSide}
                onClick={() => setFilter('liked')}
              >
                {intl.formatMessage(messages.liked)}
              </Button>
            </Row>
            <Layout flexBasis={20} />
            <List
              visibleNotes={filterNotes(notes, searchValue, filter)}
              deleteItem={deleteItem}
              toggleStatus={toggleStatus}
            />
            <Layout flexBasis={17} />
            <Row justifyContent='space-between'>
              <Input
                placeholder={intl.formatMessage(messages.post)}
                onChange={event => setNewNote(event.target.value)}
                value={newNote}
              />
              <Layout flexBasis={3} />
              <Button
                onClick={() => {
                  setNotes(addItem(notes, newNote))
                  setNewNote('')
                }}
                backgroundColor='transparent'
              >
                {intl.formatMessage(messages.add)}
              </Button>
            </Row>
          </Column>
        </Box>
      </NotesProvider>
    </ThemeProvider>
  )
}
