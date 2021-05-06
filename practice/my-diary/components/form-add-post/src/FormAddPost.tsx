import React, { useState } from 'react'
import { useIntl }         from 'react-intl'

import { Button }          from '@ui/button'
import { Input }           from '@ui/input'
import { Layout, Row }     from '@ui/layout'
import { useNotes }        from '@store/notes'

import messages            from './messages'
import { addItem }         from './actions'

export const FormAddPost = () => {
  const [newNote, setNewNote] = useState('')
  const [notes, setNotes] = useNotes()
  const intl = useIntl()
  return (
    <Row justifyContent='space-between'>
      <Input
        placeholder={intl.formatMessage(messages.post)}
        onChange={event => setNewNote(event.target.value)}
        value={newNote}
      />
      <Layout flexBasis={3} />
      <Button
        color='white'
        backgroundColor='deepPurple'
        borderRadius='extra'
        boxShadow='violet'
        onClick={() => {
          setNotes(addItem(notes, newNote))
          setNewNote('')
        }}
      >
        {intl.formatMessage(messages.add)}
      </Button>
    </Row>
  )
}
