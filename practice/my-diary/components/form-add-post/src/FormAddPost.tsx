import React, { useState }     from 'react'
import { useIntl }             from 'react-intl'

import { Button }              from '@ui/button'
import { Input }               from '@ui/input'
import { Column, Layout, Row } from '@ui/layout'
import { useNotes }            from '@store/notes'

import messages                from './messages'
import { Space }               from '../../../ui/text/src/Space'
import { addItem }             from './actions'

export const FormAddPost = () => {
  const [newNote, setNewNote] = useState('')
  const [notes, setNotes] = useNotes()
  const [inputStatus, setInputStatus] = useState('invisible')
  const intl = useIntl()
  return (
    <Column>
      <Column backgroundColor='white'>
        <Row opacity={inputStatus === 'visible' ? '1' : '0'}>
          <Layout flexBasis={58} />
          <Input
            fontSize='normal'
            placeholder={intl.formatMessage(messages.post)}
            onChange={event => setNewNote(event.target.value)}
            value={newNote}
          />
          <Layout flexBasis={200} />
        </Row>
        <Layout flexBasis={50} />
      </Column>

      <Button
        width='fit-content'
        height='80px'
        position='relative'
        top='-25px'
        left='170px'
        fontSize='large'
        fontWeight='bold'
        color='white'
        backgroundColor='deepPurple'
        borderRadius='gigant'
        boxShadow='violet'
        onClick={() => {
          setInputStatus('visible')
          if (inputStatus === 'visible') {
            setNotes(addItem(notes, newNote))
            setNewNote('')
            setInputStatus('invisible')
          }
        }}
      >
        <Space count={5} />
        {intl.formatMessage(messages.newTask)}
        <Space count={5} />
      </Button>
    </Column>
  )
}
