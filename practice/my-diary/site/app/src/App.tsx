import React, { useState }          from 'react'
import { useIntl }                  from 'react-intl'

import { MainPageHeader }           from '@components/main-page-header'
import { Button }                   from '@ui/button'
import { Input }                    from '@ui/input'
import { Box, Column, Layout, Row } from '@ui/layout'
import { List }                     from '@ui/list'

import messages                     from './messages'

export const App = () => {
  const intl = useIntl()
  const uniqKey = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  const [notes, setNotes] = useState([
    { note: 'Flight to Moscow', important: false, liked: false, id: uniqKey() },
    { note: 'Friends meeting', important: true, liked: false, id: uniqKey() },
    { note: 'Buy a new frying pan in Ikea', important: false, liked: false, id: uniqKey() },
  ])

  const deleteItem = id => {
    const index = notes.findIndex(customElements => customElements.id === id)
    const newArray = [...notes.slice(0, index), ...notes.slice(index + 1)]
    setNotes(newArray)
  }

  const toggleStatus = (id, value) => {
    const index = notes.findIndex(customElements => customElements.id === id)
    const lastNote = notes[index]
    let newNote
    if (value === 'important') {
      newNote = { ...lastNote, important: !lastNote.important }
    } else {
      newNote = { ...lastNote, liked: !lastNote.liked }
    }
    const newArray = [...notes.slice(0, index), newNote, ...notes.slice(index + 1)]
    setNotes(newArray)
  }

  return (
    <Box className='root' width='800px'>
      <Column>
        <MainPageHeader />
        <Layout flexBasis={20} />
        <Row justifyContent='space-between'>
          <Input placeholder={intl.formatMessage(messages.search)} padding='0 6px' />
          <Layout flexBasis={4} />
          <Button
            backgroundColor='#17a2b8'
            color='#fff'
            borderColor='#17a2b8'
            borderRadius='4px 0 0 4px'
          >
            {intl.formatMessage(messages.all)}
          </Button>
          <Button backgroundColor='transparent' borderRadius='0 4px 4px 0'>
            {intl.formatMessage(messages.liked)}
          </Button>
        </Row>
        <Layout flexBasis={20} />
        <List notes={notes} deleteItem={deleteItem} toggleStatus={toggleStatus} />
        <Layout flexBasis={17} />
        <Row justifyContent='space-between'>
          <Input placeholder={intl.formatMessage(messages.post)} padding='0 6px' />
          <Layout flexBasis={4} />
          <Button backgroundColor='transparent'>{intl.formatMessage(messages.add)}</Button>
        </Row>
      </Column>
    </Box>
  )
}
