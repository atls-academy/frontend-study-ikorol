import React, { useState }                from 'react'

import { Button }                         from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Box, Column, Layout, Row }       from '@ui/layout'
import { Text }                           from '@ui/text'

import { Item }                           from './Item'

export const List: any = ({ notes, deleteItem, toggleStatus }) => {
  const [newNotes, setNewNotes] = useState(notes)
  const elements = newNotes.map(item => {
    return (
      <Column key={item.id}>
        <Row>
          <Item onDoubleClick={() => setNewNotes(toggleStatus(newNotes, item.id, 'liked'))}>
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
              onClick={() => setNewNotes(toggleStatus(newNotes, item.id, 'important'))}
            >
              <StarIcon color={item.important ? '#FFD700' : '#6c757d'} />
            </Button>
            <Layout flexBasis={3} />
            <Button
              backgroundColor='#fff'
              border='none'
              width='40px'
              onClick={() => setNewNotes(deleteItem(newNotes, item.id))}
            >
              <TrashIcon />
            </Button>
            <Layout flexBasis={3} />
            <Button backgroundColor='#fff' border='none' width='40px'>
              <HeartIcon opacity={item.liked ? '1' : '0'} />
            </Button>
          </Box>
        </Row>
        <Layout flexBasis={5} />
      </Column>
    )
  })
  return elements
}
