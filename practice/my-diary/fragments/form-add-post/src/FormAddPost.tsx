import React, { useEffect, useState } from 'react'
import { useIntl }                    from 'react-intl'

import { Button }                     from '@ui/button'
import { Condition }                  from '@ui/condition'
import { Input }                      from '@ui/input'
import { Box, Column, Layout, Row }   from '@ui/layout'
import { Text }                       from '@ui/text'
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
    <Column alignItems='center'>
      <Row justifyContent='center' backgroundColor='white'>
        <Column alignItems='center' width='70%'>
          <Condition match={isVisible}>
            <Input
              placeholder={intl.formatMessage(messages.post)}
              onChange={event => setNewNote(event.target.value)}
              value={newNote}
            />
          </Condition>
          <Layout flexBasis={isVisible ? 40 : 82} />
        </Column>
      </Row>
      <Box justifyContent='center' width='40%'>
        <Button
          size='giant'
          borderRadius='giant'
          shadow='purple'
          marginTop='-30px'
          onClick={() => {
            setIsVisible(!isVisible)
            if (newNote) {
              setNotes(addItem(notes, newNote))
              setNewNote('')
              setIsVisible(false)
            }
          }}
        >
          <Text fontSize={['medium', 'large', 'giant']} fontWeight='bold' color='white'>
            {intl.formatMessage(messages.newTask)}
          </Text>
        </Button>
      </Box>
    </Column>
  )
}
