import React                              from 'react'

import { Button }                         from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Box, Column, Layout, Row }       from '@ui/layout'
import { Text }                           from '@ui/text'
import { useNotes }                       from '@store/notes'

import { Item }                           from './Item'

export const List: any = ({ deleteItem, toggleStatus }) => {
  const [notes, setNotes] = useNotes()

  return (
    <Column>
      {notes.map(item => (
        <>
          <Row key={item.id}>
            <Item onDoubleClick={() => setNotes(toggleStatus(notes, item.id, 'liked'))}>
              <Text lineHeight='40px' padding='0 6px'>
                {item.note}
              </Text>
            </Item>
            <Layout flexBasis={3} />
            <Box>
              <Button
                backgroundColor='#fff'
                border='none'
                width='40px'
                onClick={() => setNotes(toggleStatus(notes, item.id, 'important'))}
              >
                <StarIcon color={item.important ? '#FFD700' : '#6c757d'} />
              </Button>
              <Layout flexBasis={3} />
              <Button
                backgroundColor='#fff'
                border='none'
                width='40px'
                onClick={() => setNotes(deleteItem(notes, item.id))}
              >
                <TrashIcon />
              </Button>
              <Layout flexBasis={3} />
              <Button backgroundColor='#fff' border='none' width='40px'>
                <HeartIcon opacity={item.liked ? '1' : '0'} />
              </Button>
            </Box>
          </Row>
          <Layout flexBasis={6} />
        </>
      ))}
    </Column>
  )
}
