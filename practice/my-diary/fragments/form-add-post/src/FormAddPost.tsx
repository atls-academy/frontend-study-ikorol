import React, { useEffect, useState } from 'react'
import { useIntl }                    from 'react-intl'

import { Button }                     from '@ui/button'
import { Condition }                  from '@ui/condition'
import { Input }                      from '@ui/input'
import { Column, Row }                from '@ui/layout'
import { Space, Text }                from '@ui/text'
import { useNotes }                   from '@store/notes'

import messages                       from './messages'
import { addItem, fetchInitialData }  from './actions'

export const FormAddPost = () => {
  const [newNote, setNewNote] = useState('')
  const [notes, setNotes] = useNotes()
  const [isVisible, setIsVisible] = useState(false)
  const intl = useIntl()

  useEffect(() => {
    setNotes(fetchInitialData())
  }, [])

  return (
    <Column>
      <Row justifyContent='center' backgroundColor='white' height='90px'>
        <Column alignItems='center'>
          <Condition match={isVisible}>
            <Input
              fontSize='normal'
              placeholder={intl.formatMessage(messages.post)}
              onChange={(event) => setNewNote(event.target.value)}
              value={newNote}
            />
          </Condition>
        </Column>
      </Row>
      <Row justifyContent='center'>
        <Button
          boxShadow='violet'
          marginTop='-30px'
          size='large'
          onClick={() => {
            setIsVisible(!isVisible)
            if (newNote) {
              setNotes(addItem(notes, newNote))
              setNewNote('')
              setIsVisible(false)
            }
          }}
        >
          <Space count={5} />
          <Text>{intl.formatMessage(messages.newTask)}</Text>
          <Space count={5} />
        </Button>
      </Row>
    </Column>
  )
}
