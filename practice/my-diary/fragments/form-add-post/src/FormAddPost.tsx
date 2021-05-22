import React, { useEffect, useState } from 'react'
import { useIntl }                    from 'react-intl'

import { Button }                     from '@ui/button'
import { Condition }                  from '@ui/condition'
import { Input }                      from '@ui/input'
import { Column, Row }                from '@ui/layout'
import { Space }                      from '@ui/text'
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
              onChange={event => setNewNote(event.target.value)}
              value={newNote}
            />
          </Condition>
        </Column>
      </Row>
      <Row justifyContent='center'>
        <Button
          height='80px'
          marginTop='-30px'
          boxShadow='violet'
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
          {intl.formatMessage(messages.newTask)}
          <Space count={5} />
        </Button>
      </Row>
    </Column>
  )
}
