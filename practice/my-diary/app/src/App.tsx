import React, { useState }                                from 'react'
import { useIntl }                                        from 'react-intl'

import { MainPageHeader }                                 from '@components/main-page-header'
import { NotesProvider }                                  from '@store/notes'
import { Button }                                         from '@ui/button'
import { Input }                                          from '@ui/input'
import { Box, Column, Layout, Row }                       from '@ui/layout'
import { List }                                           from '@ui/list'

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
              backgroundColor={filter === 'all' ? '#17a2b8' : 'transparent'}
              color={filter === 'all' ? '#fff' : '#6c757d'}
              borderRadius='4px 0 0 4px'
              onClick={() => setFilter('all')}
            >
              {intl.formatMessage(messages.all)}
            </Button>
            <Button
              backgroundColor={filter === 'important' ? '#17a2b8' : 'transparent'}
              color={filter === 'important' ? '#fff' : '#6c757d'}
              borderRadius='0'
              onClick={() => setFilter('important')}
            >
              {intl.formatMessage(messages.important)}
            </Button>
            <Button
              backgroundColor={filter === 'liked' ? '#17a2b8' : 'transparent'}
              color={filter === 'liked' ? '#fff' : '#6c757d'}
              borderRadius='0 4px 4px 0'
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
  )
}
